import { types, Instance, SnapshotIn } from 'mobx-state-tree';

import { EntityType } from 'src/types/entity';
import { blockAliases } from 'src/aliases';

const Text = types.model({
	id: types.identifier,
	type: types.literal('text'),
	params: types.model({
		x: types.number,
		y: types.number,
		isStatic: false,
		rightFacing: true,
	}),
}).actions((self) => ({
	move(deltaX: number, deltaY: number): void {
		self.params.x += deltaX;
		self.params.y += deltaY;
	},
})).views(() => ({
	get displayName(): string {
		return 'Text';
	},
}));
export default Text;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IText extends Instance<typeof Text> {}
