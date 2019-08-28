// -----------------------------------------------------------------------------
// Copyright (c) 2019 kallup.jens@web.de
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
// THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
// -----------------------------------------------------------------------------
var pmNone      = 0;    // Set the PopupMode property to pmNone if you want the popup window to have the pre-Delphi 8 behavior
var pmAuto      = 2;    // Popup handling is automatic.
var pmExplicit  = 4;    // Set the PopupMode property to pmExplicit for non-modal
                        // design windows such as tool palettes and other floating tool windows. T

// ----------------------------------------------------------------------------
//
// ----------------------------------------------------------------------------
export class TObject {
    constructor () {
        this.ClassInfo = 0;
        this.ClassType = 0;
        this.ClassName = "TObject";     // Returns a string indicating the type of the object instance
        this.ClassParent = 0;
        this.InheritsFrom = 0;
        this.ToString = "TObject";      // Returns a string containing the class name.
        this.Tag = 0;       // Stores an integer value as part of a component.

        this.AfterConstruction = 0;     // Responds after the last constructor has executed.
        this.BeforeDestruction = 0;     // Responds before the first destructor executes.
    }
}

// ----------------------------------------------------------------------------
// class TComponent
//
// Is the common ancestor of all component classes.
// ----------------------------------------------------------------------------
export class TComponent extends TObject {
    constructor() {
        super();

        this.ComponentCount = 0;    // Indicates the number of components owned by the component.
        this.Components     = [];   // Lists all components owned by the component.
        this.ComponentIndex = 0;    // Indicates the position of the component

        this.Name = "";             // Specifies the name of the component as referenced in code.
    }
}

// ----------------------------------------------------------------------------
// class TControl
//
// Is the base class for all components that are visible at runtime.
// ----------------------------------------------------------------------------
export class TControl extends TComponent {
    constructor(top,left,width,height) {
        super();

        this.Height = height;       // Specifies the vertical   size of the control in pixels.
        this.Width  = width;        // Specifies the horizontal size of the control in pixels.

        this.Left = left;           // Specifies the horizontal coordinate of the left edge of a
        this.Top  = top;            // component relative to its parent.
                                    // Specifies the Y coordinate of the top left corner of a
                                    // control, relative to its parent or containing control in pixels.
        this.Active = false;        // Specifies whether the form has focus.
        this.Color  = 0;            // Specifies the background color of the control.
        this.Font   = "Font";       // Controls the attributes of text written on or in the control.
    }
}

// ----------------------------------------------------------------------------
// TCustomForm
//
// Is the base class from which to derive a window such as
// a form or dialog.
// ----------------------------------------------------------------------------
export class TCustomForm extends TControl {
    constructor(top,left,width,height) {
        super();

        this.Menu = 0;              // Specifies the form's main menu.
        this.ModalResult = 0;       // Represents the return value of a form that is used as a modal dialog.

        this.PopupMode = [];        // Enumerates the possible values of a Form's PopupMode property.
    }

    // Closes the form.
    Close() {
    }

    // Sets focus to a control on the form.
    FocusControl(Control) {
    }

    // Hides the form.
    Hide() {
    }

    // Shows the form.
    Open() {
	console.log("TControl: Open()");
        this.Show();
    }

    Show()      /* Shows the form. */ {
    }
    ShowModal() /* Shows a form as a modal dialog.  */ {
    }
}

// ----------------------------------------------------------------------------
// class TForm
//
// Represents a standard application window (form).
// ----------------------------------------------------------------------------
export class TForm extends TCustomForm {
    constructor(left=50,top=50,width=200,height=200) {
        super(left,top,width,height);

        this.ActiveControl = 0;     // Specifies the control that has focus on the form.
        this.ActiveMDIChild = 0;    // Specifies the MDI child that has focus.

        this.AlphaBlend = 0;        // Specifies whether the form is translucent.
        this.AutoScroll = false;    // Indicates whether scroll bars appear automatically
                                    // on the scrolling windowed control if it is not
                                    // large enough to display all of its controls.
        this.BorderIcons = [];      // Specifies which icons appear on the title bar of the form.
        this.ClientHandle = 0;      // Provides access to the handle of the form's internal MDI client window.

        this.ClientHeight = 0;      // Specifies the height (in pixels) of the form's client area.
        this.ClientWidth = 0;       // Specifies the width  (in pixels) of the form's client area.

        this.Icon = "";             // Specifies the icon that appears when the form is minimized.

        this.FormStyle = [];        // Determines the form's style.

        alert("Foormser 11");
    }
}

