interface ScriptExecutionConfiguration
{
    displayText:string //text to display in popup
    script:string //script name to execute without .js
    targetUrl:string //chrome style url match

    multiTarget?:boolean //target all valid urls in the window
    category?:string //category for execute link to appear under

    //name of an executor callback to handle
    //the results fromt the tabs
    tabresultHandler?:keyof ExecutorCallbacks

}

interface GroupedExecuteConfigs
{
    [category:string]:ScriptExecutionConfiguration[]
}

interface ExecutorCallbacks
{
    [name:string]:Function
}