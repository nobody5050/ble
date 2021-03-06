import { SnapshotInBlock } from 'src/models/Block';
import { SnapshotInLevel } from 'src/models/Level';
import { SerializedLevel } from 'src/types/snapshot';
import { BlockType } from 'src/types/entity';

type EntityObj = {
	[key: string]: SnapshotInBlock;
};


export function levelPreProcessor(snapshot: SerializedLevel): SnapshotInLevel {
	const entities = snapshot.entities.reduce((acc: EntityObj, entity, i) => {
		const id = i.toString();
		const ent = {
			...entity,
			type: entity.type as BlockType,
			id,
		};
		acc[id] = ent;

		return acc;
	}, {});

	return {
		...snapshot,
		timings: snapshot.timings || [0, 0],
		entities,
		entityIdCounter: snapshot.entities.length,
	};
}
