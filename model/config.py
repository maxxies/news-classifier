from model.utils import AttributeDict

config = {
    "model_name": "facebook/bart-large-mnli",
    "pipeline_name":"zero-shot-classification", 
    "pipeline_name": "TextClassificationPipeline",
    "labels":["governance", "social", "environmental"],
}

config = AttributeDict(config)
