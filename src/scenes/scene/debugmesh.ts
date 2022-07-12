import { Color3, Mesh, MeshBuilder, StandardMaterial } from "@babylonjs/core";

export default class DebugMesh extends Mesh {
    public onStart(): void {
        const mesh = this;
        // Create player debug ellipsoid shape
        var ellipsoid = MeshBuilder.CreateCylinder("debug", {diameter: (mesh.ellipsoid.x *2), height: (mesh.ellipsoid.y * 2), subdivisions: 24}, this._scene);
        ellipsoid.position.copyFrom(mesh.position);
        ellipsoid.position.addInPlace(mesh.ellipsoidOffset);

        // Set ellipsoid debug shape material
        var debugmat = new StandardMaterial("debugmat", this._scene);
        debugmat.diffuseColor = new Color3(0, 1, 0);
        debugmat.wireframe = true;
        ellipsoid.material = debugmat;
    }
}