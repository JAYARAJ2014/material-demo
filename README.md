# MaterialDemo
## Steps included

Created an angular project using ng new material-demo
Added material using schematic ng add @angular/material
Cleared contents of the app.component.html and added a button and a raised button. 
Created a new module ng g m material and removed the common module import statement.
Declared a constant named MaterialComponents and imported and exported it from the same module .
Imported MaterialModule in to the app.module.ts

##  Typography
class="mat-display-4" is used for display class.

added mat-headline and subheading classes to substitute for h1 etc.

added mat-body for body text

## Material button
Import MatButton module
To create simpleest button add mat-button attribute. 
To add a raised button use mat-raised-button
To add a flat button use mat-flat-button
To add an outline button mat-stroked button
To add icon button mat-icon attribute
To add circlular button mat-fab
To add smaller circular button mat-mini-fab

## Colors
color="Primay" or Accent and Warn  attributes can be used to color buttons.

##Toggle Button
Import MatButtonToggleModule and use <<mat-button-toggle> to create toggle button. 
  
Add a template variable to access button state. Example 
`
<mat-button-toggle #toggleState disableRipple>{{toggleState.checked?'ON':'OFF'}}</mat-button-toggle>
 `
