/* globals _, wp, React */

import Select, { components } from 'react-select';

const KirkiSelectForm = ( props ) => {
	/**
	 * Pass-on the value to the customizer object to save.
	 *
	 * @param {Object} val - The selected option.
	 */
	const handleChangeComplete = ( val, type ) => {

		let newValue = type.action === 'clear' ? '' : val.value;

		wp.customize( props.customizerSetting.id ).set( newValue );

	};

	/**
	 * Change the color-scheme using WordPress colors.
	 *
	 * @param {Object} theme
	 */
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

	/**
	 * Allow rendering HTML in select labels.
	 *
	 * @param {Object} props - Object { label: foo, value: bar }.
	 */
	const getLabel = props => {
		return (
			<div dangerouslySetInnerHTML={{ __html: props.label }}></div>
		);
	};

	return (
		<div>
			<label className="customize-control-title">{ props.label }</label>
			<span class="description customize-control-description" dangerouslySetInnerHTML={{ __html: props.description }}></span>
			<div className="customize-control-notifications-container" ref={ props.setNotificationContainer }></div>
			<Select
				{ ...props }
				formatOptionLabel={ getLabel }
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
