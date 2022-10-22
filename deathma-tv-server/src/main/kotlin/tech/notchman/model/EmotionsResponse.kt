package tech.notchman.model

import kotlinx.serialization.Serializable

@Serializable
class EmotionsResponse(
    val message: String,
    val result: Emotions
)
