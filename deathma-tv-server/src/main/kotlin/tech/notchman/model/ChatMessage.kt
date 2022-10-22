package tech.notchman.model

import kotlinx.serialization.Serializable

@Serializable
data class ChatMessage(
    var name: String,
    val text: String,
    val action: String,
    val id: String,
    val test: String,
    var emotions: Emotions
)
