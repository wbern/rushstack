// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import * as os from 'os';

import { RushCommandLineParser } from '../RushCommandLineParser';
import { BaseRushAction } from './BaseRushAction';
import Select from '../../logic/select/index';

export class SelectAction extends BaseRushAction {
  public constructor(parser: RushCommandLineParser) {
    super({
      actionName: 'select',
      summary: 'Start an interactive prompt for running multiple rush projects in watch mode and more.',
      documentation: 'TODO',
      parser
    });
  }

  protected onDefineParameters(): void {
    // No parameters
  }

  protected async runAsync(): Promise<void> {
    console.log('start select!');

    await Select();

    console.log('select done!');
  }
}
