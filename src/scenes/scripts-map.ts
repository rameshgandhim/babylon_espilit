import { ScriptMap } from "./tools";

/**
 * Defines the interface that exposes all exported scripts in this project.
 */
export interface ISceneScriptMap extends ScriptMap {
	"src/scenes/scene/debugmesh.ts": any;
	"src/scenes/scene/player.ts": any;
	"src/scenes/scene/playerCamera.ts": any;
}

/**
 * Defines the map of all available scripts in the project.
 */
export const scriptsMap: ISceneScriptMap = {
	"src/scenes/scene/debugmesh.ts": require("./scene/debugmesh"),
	"src/scenes/scene/player.ts": require("./scene/player"),
	"src/scenes/scene/playerCamera.ts": require("./scene/playerCamera"),
}
