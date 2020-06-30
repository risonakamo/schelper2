interface ScriptExecutionConfiguration
{
    displayText:string //text to display in popup
    script:string //script name to execute without .js
    targetUrl:string //chrome style url match
    multiTarget?:boolean //target all valid urls in the window
}