package tech.notchman.plugins

import io.ktor.server.application.*
import io.ktor.server.plugins.autohead.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import tech.notchman.controllers.ApiController
import tech.notchman.controllers.Progress
import tech.notchman.infra.ApiClient
import tech.notchman.infra.Channel


fun Application.configureRouting() {
    install(AutoHeadResponse)
    val apiClient = ApiClient()
    val apiController = ApiController(apiClient)
    routing {
        get("/") {
            call.respondText("Hello World!!")
        }
        get("/progress") {
            val response: Progress = apiController.getProgress()
//            println(response)
            val responseStr = Json.encodeToString(response)
//            println(responseStr)
            call.respond(responseStr)
        }
        post("/channel/create") {

            val response: Channel = apiController.getChannelInfo("example")
            call.respond(Json.encodeToString(response))
//            call.respond("{" +
//                    "\"broadcast_url\":\"https://example.com\"," +
//                    "\"broadcast_secret\":\"example-token\"" +
//                    "}")

        }
    }
}
