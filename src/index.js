/* global wp */

import KirkiSelectControl from './KirkiSelectControl';

// Register control type with Customizer.
wp.customize.controlConstructor['kirki-react-select'] = KirkiSelectControl;
