import logging
import os
import json
from typing import Dict, Any, Tuple, List
import uuid

from onnxruntime import InferenceSession
from transformers import AutoTokenizer
import numpy as np

import azure.functions as func
# import azure.cosmos.cosmos_client as cosmos_client
# from azure.cosmos.cosmos_client import CosmosClient
# from azure.cosmos.database import DatabaseProxy
# from azure.cosmos.container import ContainerProxy
# import azure.cosmos.exceptions as exceptions


# Tokenizerの初期化。元のモデルで使用していたTokenizerの設定およびモデルを読み込む
model_path = "cl-tohoku/bert-base-japanese-v2"  # "cl-tohoku/bert-base-japanese-whole-word-masking"
tokenizer = AutoTokenizer.from_pretrained(
    model_path,
    use_fast=True,
)
# ONNX形式のモデルから推論用モデルを作成
onnx_file = "model.onnx"
onnx_path = os.path.join(
    os.path.abspath(os.path.join(os.path.dirname(__file__), '..')),
    onnx_file
)
session = InferenceSession(onnx_path)


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    MAX_TOKEN_COUNT = 512
    
    items: Dict[str, Any] = req.get_json()
    logging.info("{}, {}".format(items, type(items)))
    
    # vectorize
    eval_data = tokenizer(
        items["text"],
        padding="max_length",
        max_length=MAX_TOKEN_COUNT,
        truncation=True,
        return_tensors="np"
    )
    logging.info("{}".format(eval_data))
    # [array([[-3.0621037, -4.851912 , -1.9152067, -5.8861265, -6.2502613, -5.5012217, -5.7506714, -6.0193906]], dtype=float32)]
    result = session.run(None, input_feed=dict(eval_data))
    vector = result[0][0].tolist()

    LABEL_COLUMNS = ['joy','sadness', 'anticipation', 'surprise', 'anger', 'fear', 'disgust', 'trust']
    adjusted_vector = {
        LABEL_COLUMNS[i]: (1.0 / (1.0 + np.exp(-b)))
        for i, b in enumerate(vector)
    }
    return func.HttpResponse(
        json.dumps({
            "message": "Creating Vector has been completed.",
            "result": adjusted_vector
        }),
        status_code=200
    )
    
    # return func.HttpResponse(
    #     json.dumps({
    #         "message": "The given item could not be founded."
    #     }),
    #     status_code=400
    # )
