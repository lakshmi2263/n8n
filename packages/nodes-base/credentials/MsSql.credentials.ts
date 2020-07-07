import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class MsSql implements ICredentialType {
	name = 'msSql';
	displayName = 'MsSQL';
	properties = [
		{
			displayName: 'Server',
			name: 'server',
			type: 'string' as NodePropertyTypes,
			default: 'localhost',
		},
		{
			displayName: 'Database',
			name: 'database',
			type: 'string' as NodePropertyTypes,
			default: 'mssql',
		},
		{
			displayName: 'User',
			name: 'user',
			type: 'string' as NodePropertyTypes,
			default: 'mssql',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string' as NodePropertyTypes,
			typeOptions: {
				password: true,
			},
			default: '',
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'number' as NodePropertyTypes,
			default: 1433,
		},
	];
}
