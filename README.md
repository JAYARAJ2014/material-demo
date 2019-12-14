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

Toggle Group can be created to make toggle buttons behave like check box or radio buttons
Default beahvior is like radio button. For checkbox add multiple attribute

Create a template reference variable to access the value of the #toggleGroup="matButtonToggleGroup" When usng multiple a comma seperated list for values is  obtained.

## icons
Import MatIconModule and use `<mat-icon>`
Go to material.io/tools/icons and find out the appropriate icon text and use it. To set color use color attribute

## badges
https://material.angular.io/components/badge/overview

Import MatBadgeModule and use a span tag with matBadge attribute
matBadgePosition can be used to control the position of the badge. Such as above after, below before etc
Specifiy matBadgeSize medium, small and large to increase /decrease size. And matBadgeColor primary, warn etc
Attribute binding can be used to bind matBadge to a property. 

