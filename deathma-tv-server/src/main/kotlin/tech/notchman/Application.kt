package tech.notchman

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import org.koin.core.context.GlobalContext.startKoin
import org.koin.environmentProperties
import tech.notchman.infra.apiModule
import tech.notchman.plugins.*

fun main() {
    startKoin {
        environmentProperties()
        modules(listOf(apiModule))
    }
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        configureRouting()
        configureSecurity()
        configureHTTP()
        configureSerialization()
        configureSockets()
    }.start(wait = true)
}
