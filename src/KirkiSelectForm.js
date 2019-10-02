/* globals _, wp, React */

import Select from 'react-select';

const KirkiSelectForm = ( props ) => {
	const handleChangeComplete = ( val ) => {
		wp.customize( props.customizerSetting.id ).set( val.value );
	};

	const theme = ( theme ) => ( {
		...theme,
		borderRadius: 0,
		colors: {
			...theme.colors,
			primary: '#0073aa',
			primary75: '#33b3db',
			primary50: '#99d9ed',
			primary24: '#e5f5fa'
		},
	} );

	const multi = ( 2 <= props.multiple );

	console.log( props.control.formattedOptions );
	return (
		<div>
			<label className="customize-control-title">{ props.label }</label>
			<span class="description customize-control-description" dangerouslySetInnerHTML={{ __html: props.description }}></span>
			<div className="customize-control-notifications-container" ref={ props.setNotificationContainer }></div>
			<Select
				options={ props.control.getFormattedOptions() }
				theme={ theme }
				isMulti={ multi }
				onChange={ handleChangeComplete }
				value={ props.control.getOptionProps( props.value ) }
				isOptionDisabled={ props.isOptionDisabled }
			/>
		</div>
	);
};

export default KirkiSelectForm;
