package tech.notchman.infra

import org.koin.dsl.module

val apiModule = module {
    single { Config(getProperty("API_TOKEN")) }
}

data class Config(val apiToken: String)