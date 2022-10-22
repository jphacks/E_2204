package tech.notchman.model

import kotlinx.serialization.Serializable

@Serializable
data class ChatMessage(
    val name: String,
    val text: String,
    val action: String,
    val id: String,
    var emotions: Emotions
)
