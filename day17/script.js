const keys = document.querySelectorAll("button")

document.addEventListener('keydown', (e) => {
  e.preventDefault()
  keyDownBoard(e)
})

function keyDownBoard(keypress) {
  const keyCode = keypress.code;
  console.log(keypress)
  const keyPressed = document.getElementById(`${keyCode}`)
  keyPressed.classList.add('pressed')
  setTimeout(() => {keyPressed.classList.remove('pressed')}, 500)
}

function keyUpBoard(keypress) {
  keypress.classList.remove('pressed')
}

/* 
backspace	8	Backspace	Backspace	
tab	9	Tab	Tab	
enter	13	Enter	Enter	
shift(esquerda)	16	Shift	ShiftLeft	event.shiftKey é true
shift(direita)	16	Shift	ShiftRight	event.shiftKey é true
ctrl(esquerda)	17	Control	ControlLeft	event.ctrlKey é true
ctrl(direita)	17	Control	ControlRight	event.ctrlKey é true
alt(esquerda)	18	Alt	AltLeft	event.altKey é true
alt(direita)	18	Alt	AltRight	event.altKey é true
pause/break	19	Pause	Pause	
caps lock	20	CapsLock	CapsLock	
escape	27	Escape	Escape	
barra de espaço	32		Space	O valor de event.key é um único espaço.
page up	33	PageUp	PageUp	
page down	34	PageDown	PageDown	
end	35	End	End	
home	36	Home	Home	
seta da esquerda	37	ArrowLeft	ArrowLeft	
seta para cima	38	ArrowUp	ArrowUp	
seta da direita	39	ArrowRight	ArrowRight	
seta para baixo	40	ArrowDown	ArrowDown	
print screen	44	PrintScreen	PrintScreen	
insert	45	Insert	Insert	
delete	46	Delete	Delete	
0	48	0	Digit0	
1	49	1	Digit1	
2	50	2	Digit2	
3	51	3	Digit3	
4	52	4	Digit4	
5	53	5	Digit5	
6	54	6	Digit6	
7	55	7	Digit7	
8	56	8	Digit8	
9	57	9	Digit9	
a	65	a	KeyA	
b	66	b	KeyB	
c	67	c	KeyC	
d	68	d	KeyD	
e	69	e	KeyE	
f	70	f	KeyF	
g	71	g	KeyG	
h	72	h	KeyH	
i	73	i	KeyI	
j	74	j	KeyJ	
k	75	k	KeyK	
l	76	l	KeyL	
m	77	m	KeyM	
n	78	n	KeyN	
o	79	o	KeyO	
p	80	p	KeyP	
q	81	q	KeyQ	
r	82	r	KeyR	
s	83	s	KeyS	
t	84	t	KeyT	
u	85	u	KeyU	
v	86	v	KeyV	
w	87	w	KeyW	
x	88	x	KeyX	
y	89	y	KeyY	
z	90	z	KeyZ	
tecla do Windows esquerda	91	Meta	MetaLeft	event.metaKey é true
tecla do Windows direita	92	Meta	MetaRight	event.metaKey é true
tecla select (menu de contexto)	93	ContextMenu	ContextMenu	
numpad 0	96	0	Numpad0	
numpad 1	97	1	Numpad1	
numpad 2	98	2	Numpad2	
numpad 3	99	3	Numpad3	
numpad 4	100	4	Numpad4	
numpad 5	101	5	Numpad5	
numpad 6	102	6	Numpad6	
numpad 7	103	7	Numpad7	
numpad 8	104	8	Numpad8	
numpad 9	105	9	Numpad9	
multiplicar	106	*	NumpadMultiply	
somar	107	+	NumpadAdd	
subtrair	109	-	NumpadSubtract	
ponto/vírgula decimal	110	.	NumpadDecimal	
dividir	111	/	NumpadDivide	
f1	112	F1	F1	
f2	113	F2	F2	
f3	114	F3	F3	
f4	115	F4	F4	
f5	116	F5	F5	
f6	117	F6	F6	
f7	118	F7	F7	
f8	119	F8	F8	
f9	120	F9	F9	
f10	121	F10	F10	
f11	122	F11	F11	
f12	123	F12	F12	
num lock	144	NumLock	NumLock	
scroll lock	145	ScrollLock	ScrollLock	
volume do áudio muto	173	AudioVolumeMute		⚠️ O valor de event.which é 181 no Firefox. O FF fornece o valor do código como VolumeMute
baixar volume do áudio	174	AudioVolumeDown		⚠️ O valor de event.which é 182 no Firefox. O FF fornece o valor do código como VolumeDown
subir volume do áudio	175	AudioVolumeUp		⚠️ O valor de event.which é 183 no Firefox. O FF fornece o valor do código como VolumeUp
media player	181	LaunchMediaPlayer		⚠️ O valor de event.which é 0 (sem valor) no Firefox. O FF fornece o valor do código como MediaSelect
executar aplicação 1	182	LaunchApplication1		⚠️ O valor de event.which é 0 (sem valor) no Firefox. O FF fornece o valor do código como LaunchApp1
executar aplicação 2	183	LaunchApplication2		⚠️ O valor de ️event.which é 0 (sem valor) no Firefox. O FF fornece o valor do código como LaunchApp2
ponto e vírgula	186	;	Semicolon	⚠️ O valor de  event.which é 59 no Firefox
sinal de igual	187	=	Equal	⚠️ O valor de event.which é 61 no Firefox
vírgula	188	,	Comma	
travessão	189	-	Minus	⚠️ O valor de event.which é 173 no Firefox
ponto	190	.	Period	
barra para frente	191	/	Slash	
crase	192	`	Backquote	
abre colchetes	219	[	BracketLeft	
barra para trás	220	\	Backslash	
fecha colchetes	221	]	BracketRight	
aspa simples	222	'	Quote
*/