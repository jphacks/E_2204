package tech.notchman.model

data class Permissions(
    val admin: Boolean = false,
    val pull: Boolean = false,
    val push: Boolean = false
)