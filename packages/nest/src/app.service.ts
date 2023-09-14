import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      page: 1,
      pageSize: 47,
      total: 47,
      items: [
        {
          gmtCreate: 1630597034000,
          gmtModified: 1630597034000,
          appId: 'desktop',
          options: {
            layout: {
              type: 'empty',
            },
            logoImg: '/static/icons/desktop.png',
            swapp:
              "apiVersion: core.oam.dev/v1alpha2\nkind: ApplicationConfiguration\nmetadata:\n  name: deploy-desktop-package\n  annotations:\n    appId: desktop\n    clusterId: master\n    namespaceId: sreworks\n    stageId: prod\nspec:\n  components:\n  - dataInputs: []\n    dataOutputs: []\n    dependencies: []\n    revisionName: INTERNAL_ADDON|productopsv2|_\n    scopes:\n    - scopeRef:\n        apiVersion: flyadmin.alibaba.com/v1alpha1\n        kind: Namespace\n        name: sreworks\n    - scopeRef:\n        apiVersion: flyadmin.alibaba.com/v1alpha1\n        kind: Stage\n        name: 'prod'\n    - scopeRef:\n        apiVersion: flyadmin.alibaba.com/v1alpha1\n        kind: Cluster\n        name: 'master'\n    parameterValues:\n    - name: TARGET_ENDPOINT\n      value: \"prod-flycore-paas-action\"\n      toFieldPaths:\n        - spec.targetEndpoint\n    - name: STAGE_ID\n      value: 'prod'\n      toFieldPaths:\n        - spec.stageId\n  - dataInputs: []\n    dataOutputs: []\n    dependencies: []\n    revisionName: INTERNAL_ADDON|appmeta|_\n    scopes:\n    - scopeRef:\n        apiVersion: flyadmin.alibaba.com/v1alpha1\n        kind: Namespace\n        name: sreworks\n    - scopeRef:\n        apiVersion: flyadmin.alibaba.com/v1alpha1\n        kind: Stage\n        name: 'prod'\n    - scopeRef:\n        apiVersion: flyadmin.alibaba.com/v1alpha1\n        kind: Cluster\n        name: 'master'\n    parameterValues:\n    - name: STAGE_ID\n      value: 'prod'\n      toFieldPaths:\n        - spec.stageId",
            docsUrl: '',
            builtIn: 1,
            name: '运维桌面',
            description: '桌面',
            source: 'swadmin',
            category: '管理',
            version: 'v2',
          },
          environments: [
            {
              clusterId: 'master',
              namespaceId: 'sreworks',
              stageId: 'prod',
            },
          ],
        },
      ],
    };
  }
}
