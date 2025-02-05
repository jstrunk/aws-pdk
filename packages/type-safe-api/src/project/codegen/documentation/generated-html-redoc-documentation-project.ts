/*! Copyright [Amazon.com](http://amazon.com/), Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0 */
import { Project, ProjectOptions, Task } from "projen";
import { GeneratedHtmlRedocDocumentationOptions } from "../../types";
import { TypeSafeApiCommandEnvironment } from "../components/type-safe-api-command-environment";

export interface GeneratedHtmlRedocDocumentationProjectOptions
  extends ProjectOptions,
    GeneratedHtmlRedocDocumentationOptions {
  /**
   * Path to the OpenAPI Specification for which to generate docs, relative to the project outdir
   */
  readonly specPath: string;
}

export class GeneratedHtmlRedocDocumentationProject extends Project {
  private readonly generateTask: Task;

  constructor(options: GeneratedHtmlRedocDocumentationProjectOptions) {
    super(options);
    TypeSafeApiCommandEnvironment.ensure(this);

    this.generateTask = this.addTask("generate");
    this.generateTask.exec(
      `npx --yes @redocly/cli@1.25.4 build-docs "${options.specPath}" --output ./index.html`
    );
    this.compileTask.spawn(this.generateTask);

    if (!options.commitGeneratedCode) {
      this.gitignore.addPatterns("index.html");
    }
  }
}
