# SC Script Executor 2
provide script executors for certain sites

## how to add new script
1. in `executeconfig.ts`, add a configuration option for the new script. check the interface or other scripts for which options are available.
    - new execute callbacks should go in the `executecallbacks.ts` file. executor callbacks are called with the result, or results, of the chosen content script to execute.
2. ensure the url being targetted is added to the manifest.