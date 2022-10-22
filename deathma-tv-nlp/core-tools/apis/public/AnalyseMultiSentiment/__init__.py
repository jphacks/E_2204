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
model_path = "cl-tohoku/bert-base-japanese-whole-word-masking"
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
    
    items: Dict[str, Any] = req.get_json()
    logging.info("{}, {}".format(items, type(items)))
    
    # vectorize
    eval_data = tokenizer(
        items["text"],
        padding="max_length",
        max_length=256,
        truncation=True,
        return_tensors="np"
    )
    result = session.run(output_names=["last_hidden_state"], input_feed=dict(eval_data))
    return func.HttpResponse(
        json.dumps({
            "message": "Creating Vector has been completed.",
            "result": result
        }),
        status_code=200
    )
    
    # return func.HttpResponse(
    #     json.dumps({
    #         "message": "The given item could not be founded."
    #     }),
    #     status_code=400
    # )


def validate_status(items: Dict[str, Any], status_key: str) -> Dict[str, Any]:
    copied_items = items.copy()
    if copied_items.get(status_key) == None:
        copied_items[status_key] = "live"
    return copied_items


def jaccard(x, y):
    # 積集合の要素数
    intersection = len(set.intersection(set(x), set(y)))    
    # 和集合の要素数
    union = len(set.union(set(x), set(y)))  
    # 分数表示で返す                 
    return intersection / union