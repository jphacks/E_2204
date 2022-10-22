# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0.2"
    }
  }

  required_version = ">= 1.1.0" # ">= 1.2.6"
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.resource_group_location
}

# Functions
## Insights
resource "azurerm_application_insights" "application_insights" {
  name                = "${var.app_name}-application-insights"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  application_type    = "other"
}

## Storage
resource "azurerm_storage_account" "storage_account" {
  name                = "${var.app_name}sa"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  # location                 = "japaneast"
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

## App Service
resource "azurerm_service_plan" "service_plan" {
  name                = "${var.app_name}-app-service-plan"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  # location            = azurerm_storage_account.storage_account.location
  os_type  = "Linux"
  sku_name = "Y1"
}

## API Management
resource "azurerm_api_management" "api_management" {
  name                = "${var.app_name}-api-management"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  publisher_name      = "Tech-fusion Studio"
  publisher_email     = "yuta.kawakami@nitk-hackathon.net"

  sku_name = "Consumption_0"
}
resource "azurerm_api_management_api" "api_management_api" {
  name                = "${var.app_name}-api-management-api"
  resource_group_name = azurerm_resource_group.rg.name
  api_management_name = azurerm_api_management.api_management.name
  revision            = "1"
  display_name        = "${var.app_name} API"
  path                = "development"
  protocols           = ["https"]
}

## Functions
resource "azurerm_linux_function_app" "linux_function_app" {
  name                = "${var.app_name}-linux-function-app"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  # location                   = azurerm_storage_account.storage_account.location

  storage_account_name       = azurerm_storage_account.storage_account.name
  storage_account_access_key = azurerm_storage_account.storage_account.primary_access_key
  service_plan_id            = azurerm_service_plan.service_plan.id

  site_config {
    api_management_api_id = azurerm_api_management_api.api_management_api.id
    application_stack {
      python_version = 3.8
    }
    cors {
      allowed_origins = ["*"]
    }
  }

  app_settings = {
    "APPINSIGHTS_INSTRUMENTATIONKEY"     = azurerm_application_insights.application_insights.instrumentation_key
  }
}
