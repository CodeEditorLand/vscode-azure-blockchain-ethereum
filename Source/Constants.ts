// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as os from "os";
import * as path from "path";
import { ExtensionContext } from "vscode";

export class Constants {
	public static extensionContext: ExtensionContext;

	public static temporaryDirectory = "";

	public static extensionId = "";

	public static extensionVersion = "";

	public static extensionKey = "";

	public static outputChannel = {
		azureBlockchain: "Azure Blockchain",
		azureBlockchainServiceClient: "Azure Blockchain Service Client",
		consortiumTreeManager: "Consortium Tree Manager",
		executeCommand: "Execute command",
		ganacheCommands: "Ganache Commands",
		logicAppGenerator: "Logic App Generator",
		telemetryClient: "Telemetry Client",
	};

	public static isWelcomePageShown = "isWelcomePageShown";

	public static defaultTruffleBox =
		"Azure-Samples/Blockchain-Ethereum-Template";

	public static tempPath = "tempPath";

	public static defaultCounter = 10;

	public static localhost = "127.0.0.1";

	public static defaultLocalhostPort = 8545;

	public static defaultAzureBSPort = 3200;

	public static requiredVersions: {
		[key: string]: string | { min: string; max: string };
	} = {
		ganache: "6.0.0",
		git: "2.10.0",
		node: "10.15.0",
		npm: "6.4.1",
		python: {
			max: "3.0.0",
			min: "2.7.15",
		},
		truffle: "5.0.0",
	};

	public static contractExtension = {
		json: ".json",
		sol: ".sol",
	};

	public static networkProtocols = {
		file: "file://",
		ftp: "ftp://",
		http: "http://",
		https: "https://",
	};

	public static contractProperties = {
		abi: "abi",
		bytecode: "bytecode",
	};

	public static propertyLabels = {
		gasLimit: "gas limit",
		gasPrice: "gas price",
	};

	public static confirmationDialogResult = {
		no: "no",
		yes: "yes",
	};

	public static mnemonicConstants = {
		fileExt: "env",
		mnemonicStorage: "mnemonicStorage",
	};

	public static defaultContractSettings = {
		gasLimit: 4712388,
		gasPrice: 100000000000,
	};

	public static telemetry = "Telemetry";

	public static networkName = {
		azure: "Azure Blockchain Service",
		local: "Local Network",
		mainnet: "Ethereum Network",
		testnet: "Ethereum Testnet",
	};

	public static paletteWestlakeLabels = {
		enterAccessKey: "Enter access key",
		enterAccountPassword: "Enter accounts password",
		enterAccountsNumber: "Enter accounts number",
		enterConsortiumManagementPassword:
			"Enter consortium management password",
		enterConsortiumMemberName: "Enter consortium member name",
		enterConsortiumName: "Enter consortium name",
		enterEtherAmount: "Enter amount of ether to assign each test account",
		enterLocalNetworkLocation: "Enter local port number",
		enterMemberPassword: "Enter member password",
		enterMnemonic: "Enter mnemonic",
		enterNetworkLocation: "Enter network location",
		enterPort: "Enter port",
		enterProjectName: "Enter project name",
		enterPublicNetworkUrl: "Enter public network url",
		enterPublicTestnetUrl: "Enter public testnet url",
		enterTruffleBoxName: "Enter pre-built Truffle project",
		enterWestlakeUrl: "Enter Westlake url",
		enterYourGanacheUrl: "Enter your Ganache url",
		selectConsortiumProtocol: "Select protocol",
		selectConsortiumRegion: "Select region",
		selectResourceGroup: "Select resource group",
		selectSubscription: "Select subscription.",
	};

	public static validationMessages = {
		incorrectHostAddress: "Incorrect host address",
		incorrectName:
			"Incorrect name. Name can contain only lowercase letters and numbers. " +
			"The first character must be a letter. The value must be between 2 and 20 characters long.",
		incorrectPassword:
			"Incorrect password. Password should contain 1 lower case character, " +
			"1 upper case character, 1 number, 1 special character that is NOT #, `, *, \", ', -, % or ;. " +
			"The value must be between 12 and 72 characters long.",
		incorrectPortNumber: "Incorrect port number",
		invalidConfirmationResult: "'yes' or 'no'",
		onlyNumberAllowed: "Value after ':' should be a number.",
		projectAlreadyExist: Constants.getMessageProjectAlreadyExist,
		unallowedSymbols: "Provided name has unallowed symbols.",
		undefinedVariable: Constants.getMessageUndefinedVariable,
		valueCannotBeEmpty: "Value cannot be empty.",
		valueShouldBeNumberOrEmpty: "Value should be a number or empty.",
	};

	public static placeholders = {
		confirmPaidOperation:
			"This operation will cost Ether, type 'yes' to continue",
		deployedUrlStructure: "host:port",
		generateMnemonic: "Generate mnemonic",
		pasteMnemonic: "Paste mnemonic",
		selectConsortium: "Select consortium",
		selectDeployDestination: "Select deploy destination",
		selectLedgerEventsDestination: "Select ledger events destination",
		selectNewProjectPath: "Select new project path",
		selectResourceGroup:
			"Select a resource group to select or create your consortium in...",
		selectSubscription: "Select subscription",
		selectTypeOfMnemonic: "Select type of mnemonic",
		selectTypeOfSolidityProject: "Select type of solidity project",
		setupMnemonic: "Setup mnemonic",
	};

	public static icons = {
		blockchainService: { light: "", dark: "" },
		consortium: { light: "", dark: "" },
		member: { light: "", dark: "" },
		transactionNode: { light: "", dark: "" },
	};

	public static contextValue = {
		blockchainService: "network",
		consortium: "consortium",
		localConsortium: "localconsortium",
		member: "member",
		transactionNode: "transactionNode",
	};

	public static executeCommandMessage = {
		failedToRunCommand: Constants.getMessageFailedCommand,
		finishRunningCommand: "Finished running command",
		runningCommand: "Running command",
	};

	public static mnemonicMessages = {
		invalidStorageTypeSelected: "Invalid storage type selected",
		whereStored: "Where are your mnemonics stored?",
	};

	public static mnemonicTypeQuickPick = {
		text: {
			local: "In local file",
			truffle: "In truffle-config",
		},
		types: {
			local: "local",
			truffle: "truffle",
		},
	};

	public static typeOfSolidityProject = {
		action: {
			emptyProject: "createEmptyProject",
			projectFromTruffleBox: "createProjectFromTruffleBox",
		},
		text: {
			emptyProject: "Create basic project",
			projectFromTruffleBox: "Create Project from Truffle box",
		},
	};

	public static ledgerEvents = {
		action: {
			azureEventGrid: "azureEventGrid",
			azureServiceBus: "azureServiceBus",
			sql: "sql",
		},
		text: {
			azureEventGridWithFlow: "Azure Event Grid with Flow",
			azureServiceBusWithFlow: "Azure Service Bus with Flow",
			sqlWithLogicApps: "SQL with Logic Apps",
		},
	};

	public static requestApiVersion = "2018-06-01-preview";

	public static requestAcceptLanguage = "en-US";

	public static requestBaseUri = "https://management.azure.com";

	public static azurePortalBasUri =
		"https://portal.azure.com/#@microsoft.onmicrosoft.com";

	public static welcomePagePath = "";

	public static requirementsPagePath = "";

	public static nodeModulesPath = "";

	public static dataCopied = " copied to clipboard";

	public static rpcEndpointAddress = "RPCEndpointAddress";

	public static accessKey = "AccessKey";

	public static folderStrings = {
		folderNotSelected: "Folder not selected",
	};

	public static ganacheCommandStrings = {
		serverAlreadyRunning: "Ganache server already running",
		serverCanNotRunWithoutGanache:
			"To start a local server, installed ganache-cli is required",
		serverCanNotStop:
			"Ganache stop server was failed because it was started from another application",
		serverSuccessfullyRunning: "Ganache server successfully running",
		serverSuccessfullyStopped: "Ganache server successfully stopped",
	};

	public static uiCommandStrings = {
		ConnectConsortiumAzureBlockchainService:
			"Connect to Azure Blockchain Service consortium",
		ConnectConsortiumLocalGanache: "Connect to Local Ganache network",
		ConnectConsortiumPublicEthereum: "Connect to Public Ethereum network",
		ConnectConsortiumTestEthereum: "Connect to Test Ethereum network",
		CreateConsortiumAzureBlockchainService:
			"Create Azure Blockchain Service consortium",
		CreateConsortiumLocally: "Create local Ganache consortium",
		CreateNewNetwork: "$(plus) Create new network",
		DeployToConsortium: "Deploy to consortium",
	};

	public static errorMessageStrings = {
		ActionAborted: "Action aborted",
		GitIsNotInstalled: "Git is not installed",
		NoSubscriptionFound: "No subscription found.",
		NoSubscriptionFoundClick:
			"No subscription found, click an Azure account " +
			"at the bottom left corner and choose Select All",
		RequiredAppsAreNotInstalled:
			"To run command you should install required apps",
		WaitForLogin: "You should sign-in on Azure Portal",
	};

	public static informationMessage = {
		consortiumDoesNotHaveMemberWithUrl:
			"Consortium does not have member with url",
		detailsButton: "Details",
		invalidRequiredVersion:
			"Required app is not installed or has an old version.",
		newProjectCreationFinished: "New project was created successfully",
		newProjectCreationStarted: "New project creation is started",
		seeDetailsRequirementsPage:
			"Please see details on the Requirements Page",
		seeDetailsWelcomePage: "Please see details on Welcome Page",
	};

	public static gitCommand = "git";

	public static initialize(context: ExtensionContext) {
		this.extensionContext = context;

		this.temporaryDirectory = context.storagePath
			? context.storagePath
			: os.tmpdir();

		this.welcomePagePath = context.asAbsolutePath(
			path.join("resources", "welcome", "index.html"),
		);

		this.requirementsPagePath = context.asAbsolutePath(
			path.join("resources", "welcome", "prereqs.html"),
		);

		this.nodeModulesPath = context.asAbsolutePath("node_modules");

		this.icons.blockchainService = {
			dark: context.asAbsolutePath(
				path.join("resources/dark", "blockchainService.svg"),
			),
			light: context.asAbsolutePath(
				path.join("resources/light", "blockchainService.svg"),
			),
		};

		this.icons.consortium = {
			dark: context.asAbsolutePath(
				path.join("resources/dark", "consortium.svg"),
			),
			light: context.asAbsolutePath(
				path.join("resources/light", "consortium.svg"),
			),
		};

		this.icons.member = {
			dark: context.asAbsolutePath(
				path.join("resources/dark", "member.svg"),
			),
			light: context.asAbsolutePath(
				path.join("resources/light", "member.svg"),
			),
		};

		this.icons.transactionNode = {
			dark: context.asAbsolutePath(
				path.join("resources/dark", "transactionNode.svg"),
			),
			light: context.asAbsolutePath(
				path.join("resources/light", "transactionNode.svg"),
			),
		};
	}

	public static getMessageChildAlreadyConnected(consortium: string): string {
		return `Connection to '${consortium}' already exists`;
	}

	public static getMessageValueOrDefault(
		valueName: string,
		defaultValue: any,
	): string {
		return (
			`Enter ${valueName}. Default value is ` +
			`${defaultValue}. ` +
			"Press Enter for default."
		);
	}

	private static getMessageProjectAlreadyExist(projectName: string): string {
		return `A project with the same name: ${projectName} already exists. Please select other name`;
	}

	private static getMessageUndefinedVariable(variable: string): string {
		return `${variable} cannot be undefined`;
	}

	private static getMessageFailedCommand(command: string): string {
		return `Failed to run command - ${command}. More details in output`;
	}
}
