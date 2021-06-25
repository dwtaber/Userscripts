// ==UserScript==
// @name         TDX Dark Mode
// @namespace    https://github.com/dwtaber/userscripts
// @version      2021.06.24.1
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxDarkMode.user.js
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/CofC/TdxDarkMode.user.js
// @description  Dark mode!
// @author       Dan Taber
// @match        https://cofc.teamdynamix.com/TDNext/*
// @grant        none
// ==/UserScript==

// CSS rules to inject into document.
const styleContent = `

:root
{
	--button-background-color: #0e639c;
	--button-background-hover-color: #1177bb;
	--button-foreground-color: #ffffff;
	--button-secondary-background-color: #3a3d41;
	--button-secondary-background-hover-color: #45494e;
	--button-secondary-foreground-color: #ffffff;
	--checkbox-background-color: #3c3c3c;
	--checkbox-border-color: #3c3c3c;
	--checkbox-foreground-color: #f0f0f0;
	--description-foreground-color: #ccccccb3;
	--dropdown-background-color: #3c3c3c;
	--dropdown-background-hover-color: #2a2d2e;
	--dropdown-border-color: #3c3c3c;
	--dropdown-foreground-color: #f0f0f0;
	--exception-background-color: #6c2022;
	--exception-foreground-color: #cccccc;
    --header-no-tabs-background-color: #1e1e1e;
    --header-tabs-background-color: #252526;
	--input-placeholder-foreground-color: #a6a6a6;
    --input-validation-error-background-color: #5a1d1d;
    --input-validation-error-border-color: #be1100;
    --input-validation-info-background-color: #063b49;
    --input-validation-info-border-color: #007acc;
    --input-validation-warning-background-color: #352a05;
    --input-validation-warning-border-color: #b89500;
    --issues-closed-color: #cb2431;
    --issues-open-color: #22863a;
	--list-drop-background-color: #383b3d;
	--main-background-color: #1e1e1e;
	--main-border-color: #444444;
	--main-foreground-color: #d4d4d4;
	--main-link-color: #3794ff;
	--main-link-hover-color: #4e94ce;
	--menu-background-color: #252526;
	--menubar-selection-background-color: #ffffff1a;
	--menubar-selection-foreground-color: #cccccc;
	--menu-foreground-color: #cccccc;
	--menu-selection-background-color: #094771;
	--menu-selection-foreground-color: #ffffff;
	--menu-separator-background-color: #bbbbbb;
	--panel-section-border: #80808059;
	--panel-section-header-background: #80808033;
	--panel-title-active-border: #e7e7e7;
	--panel-title-active-foreground: #e7e7e7;
	--panel-title-inactive-foreground: #e7e7e799;
	--scrollbar-shadow: #000000;
	--scrollbar-slider-active-background: #bfbfbf66;
	--scrollbar-slider-background: #79797966;
	--scrollbar-slider-hover-background: #646464b3;
	--selection-background-color: #264f78;
	--settings-focusedRowBackground: #80808024;
	--settings-textInputBackground: #3c3c3c;
	--settings-textInputForeground: #cccccc;
	--sidebar-section-header-background-color: #00000000;
	--sidebar-section-header-border-color: #cccccc33;
}

.select2-drop,
.select2-container-multi .select2-choices .select2-search-choice,
.ms-drop
{
    background: #333333;
}

body,
.ButtonCell,
.ButtonCellTop,
.table-striped>tbody>tr:nth-of-type(even)
{
    background-color: #1e1e1e;
}


input:checked + .slider /* Slider background when checked */
{
    background-color: #22863aff !important
}

.btn-primary
{
	background-color: #22863acc;
}

.btn-primary:hover
{
	background-color: #22863aff;
}

.panel,
.tab-row,
.select2-container .select2-choice,
.select2-container .select2-choices,
.select2-container .select2-choices .select2-search-field input,
.list-group-item,
.table-striped>tbody>tr:nth-of-type(odd),
tr.TDGridHeader,
div.comment,
.modal-content,
#divLeft,
#divLeft *,
::-webkit-scrollbar-thumb:active
{
    background-color: #252526;
}

.slider:before /* Color of sliding button itself */
{
    background-color: #252526 !important
}

.TabButtonCell,
ul.nav-tabs>li.active>a,
ul.nav-tabs>li.active>a:hover,
.sortable-item:nth-of-type(even)
{
	background-color: #2d2d2d ;
}

.light-gray-bg,
.ui-tabs-active,
nav.navbar-fixed-top,
#divTabHeader,
div.feed-child-box
{
    background-color: #2d2d2d !important;
}

nav#divtabheader,
nav.tab-header,
.block-actions,
.nav1,
.nav2,
.nav3,
.panel-default>.panel-heading,
.nav>li>a:focus,
.nav>li>a:hover,
.copybutton,
.dropdown-menu,
.alert-info,
.feed-reply,
.form-control,
.talu_holder .bit-input input,
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control,
.btn-default,
.input-group-btn .btn-default,
.panel-footer,
tr.tdgridheader,
.pagination>li>a,
.pagination>li>span,
.tdpagerrow>td>span,
.ms-choice
{
    background-color: #333333;
}


.nav-tabs>li.active>a,
.nav-tabs>li.active>a:focus,
.nav-tabs>li.active>a:hover,
.btn-default.active,
.btn-default.focus,
.btn-default:active,
.btn-default:focus,
.btn-default:hover,
.btn-default.active.focus,
.btn-default.active:focus,
.btn-default.active:hover,
.btn-default:active.focus,
.btn-default:active:focus,
.btn-default:active:hover,
.copyButton,
.open>.dropdown-toggle.btn-default.focus,
.open>.dropdown-toggle.btn-default:focus,
.open>.dropdown-toggle.btn-default:hover,
ul.nav-pills li.dropdown button.dropdown-toggle:hover,
::-webkit-scrollbar-thumb
{
    background-color: #3c3c3c;
}

.nav>li>a:hover
{
    background-color: #3c3c3c !important
}

.alert-danger,
.btn-default,
.btn-default.active,
.btn-default.focus,
.btn-default:active,
.btn-default:focus,
.btn-default:hover,
.btn-default.active.focus,
.btn-default.active:focus,
.btn-default.active:hover,
.btn-default:active.focus,
.btn-default:active:focus,
.btn-default:active:hover,
.open>.dropdown-toggle.btn-default.focus,
.open>.dropdown-toggle.btn-default:focus,
.open>.dropdown-toggle.btn-default:hover,
.select2-container-multi .select2-choices .select2-search-choice
{
    border-color: #464646;
}

.copyButton:hover,
::-webkit-scrollbar-thumb:hover
{
    background-color: #4f4f4f;
}

.slider /* Slider background when unchecked */
{
    background-color: #4f4f4f !important;
}

div.alert-danger
{
    background-color: #5a1d1d;
}

.alert-warning
{
    background-color: #8e6a00;
}

.select2-no-results
{
    background-color: #8e6a00 !important;
}

#divSuggestions.RightSideNav,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-resizer
{
    background-color: inherit
}

.breadcrumb,
.btn-link:focus,
.btn-link:hover,
.ui-layout-resizer
{
    background-color: transparent;
}

.white-bg
{
    background-color: #1e1e1e !important;
}

.tab-row,
.nav-tabs
{
    border-bottom: 1px solid #252526;
}

.modal-header,
table>thead>tr.tdgridheader>th,
tr.tdgridheader td
{
    border-bottom: 1px solid #464646;
}

.ButtonCell,
.ButtonCellTop,
table>thead>tr.TDGridHeader>th
{
    border-bottom-color: #1e1e1e
}

.sortable-item
{
    border-bottom-color: transparent
}

tr.TDGridHeader
{
    border-color: #252526;
}

nav.navbar-fixed-top,
.soft-border-bottom,
.ui-widget-header,
.ui-tabs-active,
div.feed-child-box
{
    border-color: #2d2d2d !important;
}

.panel-default>.panel-heading,
.panel-footer,
.block-actions
{
    border-color: #333333;
}

.alert-warning
{
    border-color: #352a05;
}

.nav-tabs>li>a:hover
{
    border-color: #3c3c3c
}

div.feed-entry
{
    border-bottom-color:#444444 !important
}

.input-group-btn .btn-default,
.select2-container .select2-choice,
.select2-container .select2-choices,
.select2-container .select2-choices .select2-search-field input
{
    border-color: #444444 !important;
}

div.alert-danger
{
    border-color: #5a1d1d;
}

.panel-default
{
    border-color: #dddddd;
}

#divSuggestions.RightSideNav
{
    border-color: transparent
}

.TabButtonCell,
ul.nav-tabs>li.active>a,
ul.nav-tabs>li.active>a:hover
{
	border: 1px solid #2d2d2d;
}

.nav-tabs>li.active>a,
.nav-tabs>li.active>a:focus,
.nav-tabs>li.active>a:hover,
.feed-reply,
.form-control,
.border
{
    border: 1px solid #3c3c3c;
}

.dropdown-menu,
.lu_tdac-auto ul,
.talu_holder,
.talu_holder .bit-box,
table>thead>tr.tdgridheader>th,
tr.tdgridheader td,
div.comment,
.pagination>li>a,
.pagination>li>span,
.tdpagerrow>td>span,
.ms-drop
{
    border: 1px solid #464646;
}

.panel,
.table-bordered>tbody>tr>td,
.table-bordered>tbody>tr>th,
.table-bordered>tfoot>tr>td,
.table-bordered>tfoot>tr>th,
.table-bordered>thead>tr>td,
.table-bordered>thead>tr>th,
.table>tbody>tr>td
{
    border: 1px solid transparent;
}

.green
{
    color: #22863a !important;
}

a,
a.nohover,
.block-actions>button.btn.btn-link,
.btn-link,
.pagination>li>a
{
    color: #569cd6;
}

.nav1
{
    color: #569cd6 !important
}

.panel-heading .fa
{
    color: #a6a6a6
}

.ListItemLbl
{
    color: #bbbbbb;
}

.btn-link:focus,
.btn-link:hover,
a:hover
{
    color: #c74e39
}

.nav1:hover
{
    color: #c74e39 !important
}

.panel-default>.panel-heading,
.dropdown-menu>li>a,
.dropdown-menu>span>li>a,
.alert-info,
.form-control,
.talu_holder .bit-box,
.btn-default,
.btn-default.active,
.btn-default.focus,
.btn-default:active,
.btn-default:focus,
.btn-default:hover,
.btn-default.active.focus,
.btn-default.active:focus,
.btn-default.active:hover,
.btn-default:active.focus,
.btn-default:active:focus,
.btn-default:active:hover,
.open>.dropdown-toggle.btn-default.focus,
.open>.dropdown-toggle.btn-default:focus,
.open>.dropdown-toggle.btn-default:hover,
.input-group-btn .btn-default,
.select2-container .select2-choice,
.select2-container .select2-choices,
.select2-container .select2-choices .select2-search-field input,
.select2-drop,
.select2-container-multi .select2-choices .select2-search-choice,
.ms-choice,
.close
{
    color: #cccccc;
}

a.ui-tabs-anchor,
.gray,
.nav3
{
    color: #cccccc !important
}


body,
.nav-tabs>li.active>a,
.nav-tabs>li.active>a:focus,
.nav-tabs>li.active>a:hover,
.breadcrumb>.active
{
    color: #d4d4d4;
}

.black
{
    color: #d4d4d4 !important;
}

.ui-tabs-active>a
{
    color: #dddddd !important;
}

h1,
h2,
h3,
.btn-primary,
.alert-danger,
.alert-warning
{
    color: #e1e1e1;
}

.select2-no-results
{
    color: #e1e1e1 !important;
}

.alert-danger .alert-link
{
    color:#ff6666;
}

.control-label,
label,
.btn-primary.active,
.btn-primary.focus,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:hover
{
    color: #ffffff;
}

.nav3:hover
{
    color: #ffffff !important
}

.panel
{
    -webkit-box-shadow: 0 1px 1px #0000000d;
}

::-webkit-scrollbar
{
    width: 1em;
}

`;

// Create a Style tag, add its inner content, and inject it into the document head.
const styleTag = document.createElement("style");
styleTag.innerHTML = styleContent;
document.head.appendChild(styleTag);
