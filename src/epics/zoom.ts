import { fromEvent } from 'rxjs';
import { map, tap, ignoreElements } from 'rxjs/operators';

import { Epic } from 'epix';

export const globalZoom: Epic = (action$, { store }) => {
	return fromEvent<WheelEvent>(document, 'wheel').pipe(
		// read https://github.com/facebook/react/pull/505#issuecomment-31300604 before touching this line
		map((ev: WheelEvent) => 1 + -0.1*Math.sign(ev.deltaY)),
		tap((factor: number) => {
			const scale = store.editor.scale;
			store.editor.setScale(scale * factor);
		}),
		ignoreElements(),
	);
};
