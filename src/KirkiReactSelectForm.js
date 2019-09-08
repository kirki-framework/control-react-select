/* globals _, wp, React */
import { Select } from 'react-select';
const KirkiReactSelectForm = ( props ) => {
	return (
		<div>
			<label className="customize-control-title">{ props.label }</label>
			<span class="description customize-control-description">{ props.description }</span>
			<div className="customize-control-notifications-container" ref={ props.setNotificationContainer }></div>
			<Select
				value={ props.value }
				options={ props.options }
			/>
		</div>
	);
};

export default KirkiReactSelectForm;
