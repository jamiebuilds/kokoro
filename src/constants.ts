export let ALL_LOCATIONS = [
	[0, 1, 2, 3, 4, 5, 6], // 0
	[0, 1, 2, 3, 4, 5, 6], // 1
	[0, 1, 2, 3, 4, 5, 6], // 2
	[0, 1, 2, 3, 4, 5, 6], // 3
	[0, 1, 2, 3, 4, 5, 6], // 4
	[0, 1, 2, 3, 4, 5, 6], // 5
]

export type RowIndex = 0 | 1 | 2 | 3 | 4 | 5
export type ColIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type LocationMap<T> = {
	// we list out every row for easy lookup
	[row in RowIndex]: { [col in ColIndex]?: T }
}

export enum Sanctuary {
	A = "A",
	B = "B",
	C = "C",
	D = "D",
	E = "E",
	F = "F",
}

export let SanctuaryLocations: LocationMap<Sanctuary> = {
	0: { 3: Sanctuary.C },
	1: {},
	2: { 2: Sanctuary.E, 6: Sanctuary.A },
	3: { 0: Sanctuary.F, 4: Sanctuary.B },
	4: {},
	5: { 3: Sanctuary.D },
}

export enum Guardian {
	Flower = 1,
	Caterpiller = 2,
}

export let GuardianLocations: LocationMap<Guardian> = {
	0: { 0: Guardian.Caterpiller },
	1: {},
	2: {},
	3: {},
	4: {},
	5: { 6: Guardian.Flower },
}

export let FlowersLocations: LocationMap<number> = {
	0: { 2: 2, 5: 1, 6: 1 },
	1: { 1: 2, 3: 2, 6: 1 },
	2: { 0: 1, 4: 2 },
	3: { 1: 2, 2: 1, 5: 1 },
	4: { 2: 1, 3: 2, 5: 1 },
	5: { 0: 3, 2: 1 },
}

export let CaterpillarsLocations: LocationMap<number> = {
	0: { 4: 1, 6: 3 },
	1: { 0: 1, 1: 1, 5: 2 },
	2: { 1: 1, 3: 2, 4: 1, 5: 1 },
	3: { 6: 2 },
	4: { 1: 1, 2: 2, 4: 1, 5: 2 },
	5: { 0: 1, 4: 2 },
}

export enum Path {
	One = 1,
	Two = 2,
	Three = 3,
	Four = 4,
	Five = 5,
	Six = 6,
}

export interface Card {
	path: Path
	gold: boolean
}

export let Deck: Card[] = [
	// path 1
	{ path: Path.One, gold: false },
	{ path: Path.One, gold: false },
	{ path: Path.One, gold: false },
	{ path: Path.One, gold: true },
	{ path: Path.One, gold: true },
	{ path: Path.One, gold: true },
	{ path: Path.One, gold: true },

	// path 2
	{ path: Path.Two, gold: false },
	{ path: Path.Two, gold: false },
	{ path: Path.Two, gold: false },
	{ path: Path.Two, gold: true },
	{ path: Path.Two, gold: true },
	{ path: Path.Two, gold: true },
	{ path: Path.Two, gold: true },

	// path 3
	{ path: Path.Three, gold: false },
	{ path: Path.Three, gold: false },
	{ path: Path.Three, gold: false },
	{ path: Path.Three, gold: true },
	{ path: Path.Three, gold: true },
	{ path: Path.Three, gold: true },
	{ path: Path.Three, gold: true },

	// path 4
	{ path: Path.Four, gold: false },
	{ path: Path.Four, gold: false },
	{ path: Path.Four, gold: false },
	{ path: Path.Four, gold: true },
	{ path: Path.Four, gold: true },
	{ path: Path.Four, gold: true },
	{ path: Path.Four, gold: true },

	// path 5
	{ path: Path.Five, gold: false },
	{ path: Path.Five, gold: false },
	{ path: Path.Five, gold: false },
	{ path: Path.Five, gold: false },
	{ path: Path.Five, gold: true },
	{ path: Path.Five, gold: true },
	{ path: Path.Five, gold: true },

	// path 6
	{ path: Path.Six, gold: false },
	{ path: Path.Six, gold: false },
	{ path: Path.Six, gold: false },
	{ path: Path.Six, gold: false },
	{ path: Path.Six, gold: true },
	{ path: Path.Six, gold: true },
	{ path: Path.Six, gold: true },
]
