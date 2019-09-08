/* global wp */

import KirkiReactSelectControl from './KirkiReactSelectControl';

// Register control type with Customizer.
wp.customize.controlConstructor['kirki-react-select'] = KirkiReactSelectControl;
