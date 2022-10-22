import argparse
import csv

from onnxruntime import InferenceSession
from transformers import AutoTokenizer
import numpy as np

# def load_csv(filename):
#     with open(filename) as f:
#         reader = csv.DictReader(f)
#         return [row for row in reader]

def main(args):
    # 前処理を行う。ここではrun_glue.py互換の`label`, `sentence1`というヘッダを持つCSVを入力とする
    # raw_datasets = load_csv(args.evalfile)
    # raw_datasets = [
    #   {
    #     "sentence1": "宿題が終わらなかった"
    #   },
    #   {
    #     "sentence1": "宿題の量が多かった"
    #   },
    # ]
    # raw_datasets = [
    #   {
    #     "sentence1": "こんにちは"
    #   },
    #   {
    #     "sentence1": "おはようございます"
    #   },
    # ]
    raw_datasets = [
      {
        "sentence1": "宿題が終わらなかった"
      },
      {
        "sentence1": "こんにちは"
      },
    ]

    # Tokenizerの初期化。元のモデルで使用していたTokenizerの設定およびモデルを読み込む
    tokenizer = AutoTokenizer.from_pretrained(
        args.model_path,
        use_fast=True,
    )

    # ONNX形式のモデルで推論する際は return_typeを "np" としてnumpy形式のテンソルを返すようにする
    eval_dataset = [tokenizer(raw["sentence1"],
                              padding=True,
                              max_length=128,
                              truncation=True,
                              return_tensors="np") for raw in raw_datasets]
    # ONNX形式のモデルから推論用モデルを作成
    session = InferenceSession(args.onnx_path)

    result = session.run(output_names=["last_hidden_state"], input_feed=dict(eval_dataset[0]))
    result_ = session.run(output_names=["last_hidden_state"], input_feed=dict(eval_dataset[1]))
    # result = session.run(output_names=["pooler_output"], input_feed=dict(eval_dataset[0]))

    # print(len(result))
    # print(result[0].shape)
    # print(np.array(result)[0, :, 0])
    # print(np.array(result)[0, :, 0].shape)
    print(f"類似指数: {np.array(result)[0, :, 0] @ np.array(result_)[0, :, 0].T}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='TensorRT and ONNX inference')
    parser.add_argument("evalfile", help="evaluation CSV file", default="")
    parser.add_argument("model_path", help="Tokenizer model path", default="cl-tohoku/bert-base-japanese-whole-word-masking")
    parser.add_argument("onnx_path", help="ONNX model path", default="./model.onnx")
    evalfile = ""
    model_path = "cl-tohoku/bert-base-japanese-whole-word-masking"
    onnx_path = "./model.onnx"
    args = parser.parse_args()
    main(args)