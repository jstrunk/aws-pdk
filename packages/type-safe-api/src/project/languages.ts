/*! Copyright [Amazon.com](http://amazon.com/), Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0 */
/**
 * Supported languages for runtimes and infrastructure
 */
export enum Language {
  TYPESCRIPT = "typescript",
  PYTHON = "python",
  JAVA = "java",
}

/**
 * Versions of node
 */
export enum NodeVersion {
  NODE_18 = "NODE_18",
  NODE_20 = "NODE_20",
  NODE_22 = "NODE_22",
}

/**
 * Versions of java
 */
export enum JavaVersion {
  JAVA_8 = "JAVA_8",
  JAVA_11 = "JAVA_11",
  JAVA_17 = "JAVA_17",
  JAVA_21 = "JAVA_21",
}

/**
 * Versions of python
 */
export enum PythonVersion {
  PYTHON_3_11 = "PYTHON_3_11",
  PYTHON_3_12 = "PYTHON_3_12",
  PYTHON_3_13 = "PYTHON_3_13",
}

/**
 * Supported libraries for code generation
 */
export enum Library {
  TYPESCRIPT_REACT_QUERY_HOOKS = "typescript-react-query-hooks",
}

export enum WebSocketLibrary {
  TYPESCRIPT_WEBSOCKET_CLIENT = "typescript-websocket-client",
  TYPESCRIPT_WEBSOCKET_HOOKS = "typescript-websocket-hooks",
}

/**
 * Formats for documentation generation
 */
export enum DocumentationFormat {
  /**
   * HTML Documentation generated by redoc
   * @see https://github.com/Redocly/redoc
   */
  HTML_REDOC = "html_redoc",
  /**
   * Markdown documentation
   */
  MARKDOWN = "markdown",
  /**
   * PlantUML schema diagrams
   */
  PLANTUML = "plantuml",
}

/**
 * Formats for WebSocket documentation generation
 */
export enum WebSocketDocumentationFormat {
  /**
   * HTML Documentation generated by AsyncAPI's HTML Template
   * @see https://github.com/asyncapi/html-template
   */
  HTML = "html_asyncapi",
  /**
   * Markdown Documentation generated by AsyncAPI's Markdown Template
   * @see https://github.com/asyncapi/markdown-template
   */
  MARKDOWN = "markdown_asyncapi",
}
