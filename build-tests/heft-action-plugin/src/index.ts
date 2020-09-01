// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { IHeftPlugin, HeftSession, HeftConfiguration, ScopedLogger } from '@rushstack/heft';

class HeftActionPlugin implements IHeftPlugin {
  public readonly pluginName: string = 'heft-action-plugin';

  public apply(heftSession: HeftSession, heftConfiguration: HeftConfiguration): void {
    heftSession.registerAction({
      actionName: 'my-custom-action',
      documentation: 'An example custom action',
      parameters: [
        {
          kind: 'flag',
          paramterLongName: '--production',
          description: 'Run in production mode',
          callbackValueName: 'production'
        }
      ],
      callback: ({ production }) => {
        const logger: ScopedLogger = heftSession.requestScopedLogger('custom-action');
        logger.terminal.writeLine(
          `!!!!!!!!!!!!!! Custom action executing (production: ${production}) !!!!!!!!!!!!!!`
        );
      }
    });
  }
}

export default new HeftActionPlugin();
