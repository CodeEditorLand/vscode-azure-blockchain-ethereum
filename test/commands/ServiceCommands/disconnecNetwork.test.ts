// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as assert from 'assert';
import rewire = require('rewire');
import * as sinon from 'sinon';
import { LocalProject } from '../../../src/Models/TreeItems';
import { GanacheService, TreeManager } from '../../../src/services';
import { ProjectView } from '../../../src/ViewItems';

describe('Disconnect Service', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('DisconnectProject_ShouldStopGanacheServer_LocalProject', () => {
    const services = [
      { localProjectInstance: new LocalProject('name', 8545), executed: true },
    ];

    services.forEach(async (service) => {
      it('GanacheService.stopGanacheServer() should be executed only for LocalProject.',
        async () => {
          // Arrange
          const serviceCommandsRewire = rewire('../../../src/commands/ServiceCommands');
          const projectView = new ProjectView(service.localProjectInstance);
          const stopGanacheServerStub = sinon.stub(GanacheService, 'stopGanacheServer');

          // Act
          await serviceCommandsRewire.ServiceCommands.disconnectProject(projectView);

          // Assert
          assert.strictEqual(
            stopGanacheServerStub.calledOnce,
            service.executed,
            'stopGanacheServer should be called once when service.executed');
        });
    });
  });

  describe('DisconnectProject_ShouldRemoveItem', () => {
    it('treeManager.removeItem() should be executed for LocalProject.', async () => {
        // Arrange
        const serviceCommandsRewire = rewire('../../../src/commands/ServiceCommands');
        const projectView = new ProjectView(new LocalProject('name', 8545));
        const removeItemMock = sinon.stub(TreeManager, 'removeItem').returns(undefined);

        // Act
        await serviceCommandsRewire.ServiceCommands.disconnectProject(projectView);

        // Assert
        assert.strictEqual(removeItemMock.calledOnce, true, 'removeItem should be called once');
      });
    });
});
