import React, {ComponentProps} from 'react';
import { BlockContext, DataContext, InputContext } from "../BlockContext";
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow } from '@wordpress/components';


const Panel: React.FC<ComponentProps<any>> = (props) => {

	const data: ComponentProps<any> = {};
	const input: ComponentProps<any> = {};

	return (
		<BlockContext.Provider value={props}>
			<DataContext.Provider value={data}>
				<InputContext.Provider value={input}>
					<PanelBody title={__('Sample title')}>
						<PanelRow>
							Sample row
						</PanelRow>
					</PanelBody>
				</InputContext.Provider>
			</DataContext.Provider>
		</BlockContext.Provider>
	);
}

export default Panel;
