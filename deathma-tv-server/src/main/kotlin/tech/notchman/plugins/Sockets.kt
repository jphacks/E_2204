package tech.notchman.plugins

import io.ktor.server.application.*
import io.ktor.server.routing.*
import io.ktor.server.websocket.*
import io.ktor.websocket.*
import tech.notchman.infra.Connection
import tech.notchman.repository.ChatRepository
import java.time.Duration
import java.util.*

fun Application.configureSockets() {
    install(WebSockets) {
        pingPeriod = Duration.ofSeconds(15)
        timeout = Duration.ofSeconds(15)
        maxFrameSize = Long.MAX_VALUE
        masking = false
    }
    val chatRepository = ChatRepository();

    routing {
        //ルームの振り分け格納
        val thisConnections = Collections.synchronizedSet<Connection?>(LinkedHashSet())
        webSocket("/rooms/{chat_id}") {
            val thisConnection = Connection(this)
            thisConnections += thisConnection
            // websocketSession
            val chatId = call.parameters["chat_id"]
            outgoing.send(Frame.Text("YOUR CHAT ROOM: $chatId"))
            try {
                send("You are connected! There are ${thisConnections.count()} users here.")
                for (frame in incoming) {
                    frame as? Frame.Text ?: continue
                    val receivedText = frame.readText()
                    thisConnections.forEach {
                        try {
                            it.session.send(receivedText)
                        }catch(e:Exception){

                        }
                    }
                }
            } catch (e: Exception) {
                println(e.localizedMessage)
            } finally {
                println("Removing $thisConnection!")
                thisConnections -= thisConnection
            }
//            for (frame in incoming) {
//                when (frame) {
//                    is Frame.Text -> {
//                        val text = frame.readText()
//                        outgoing.send(Frame.Text("YOU SAID: $text"))
//                        if (text.equals("bye", ignoreCase = true)) {
//                            close(CloseReason(CloseReason.Codes.NORMAL, "Client said BYE"))
//                        }
//                    }
//                    else -> {
//
//                    }
//                }
//            }
        }
    }
}
