export interface EthGasReporterConfig {
  currency?: string;
  gasPrice?: number;
  coinmarketcap?: string;
  outputFile?: string;
  noColors?: boolean;
  onlyCalledMethods?: boolean;
  rst?: boolean;
  rstTitle?: boolean;
  showTimeSpent?: boolean;
  excludeContracts?: string[];
  src?: string;
  proxyResolver?: any;
  showMethodSig?: boolean;
  maxMethodDiff?: number;
  maxDeploymentDiff?: number;
  enabled?: boolean;
  remoteContracts?: RemoteContract[];
  ethPrice?: string;

  // Hardhat internals set for eth-gas-reporter
  metadata?: any;
  getContracts?: any;
  url?: string;
  fast?: boolean;
}

export interface RemoteContract {
  abi: any;
  address: string;
  name: string;
  bytecode?: string;
  bytecodeHash?: string;
  deployedBytecode?: string;
}

/**
 * Type for the object generated by eth-gas-reporter on gasReporterOutput.json files.
 * More info: https://github.com/cgewecke/eth-gas-reporter/blob/master/docs/gasReporterOutput.md
 */
export interface EthGasReporterOutput {
  namespace: string;

  config: {
    currency: string;
    gasPrice: number;
    outputFile?: string;
    rst: boolean;
    rstTitle?: string;
    showTimeSpent: boolean;
    artifactType: string;
    srcPath: string;
    blockLimit: number;
    ethPrice: string;
    excludeContracts: string[];
    onlyCalledMethods: boolean;
    url: string;

    metadata: {
      compiler: {
        version: string;
      };

      settings: {
        evmVersion: string;
        optimizer: {
          enabled: boolean;
          runs: number;
        };
      };
    };
  };

  info: {
    blockLimit: number;

    methods: {
      [methodName: string]: {
        key: string;
        contract: string;
        method: string;
        gasData: number[];
        numberOfCalls: number;
      };
    };

    deployments: Array<{
      name: string;
      bytecode: string;
      deployedBytecode: string;
      gasData: number[];
    }>;
  };
}
