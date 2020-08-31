App.Main.Start();

for (const _ of App.Main.Loops) { basic.forever(() => { _() }); }

input.onButtonPressed(Button.A, () => {
    App.Main.OnKeyPress(Button.A);    
});

input.onButtonPressed(Button.B, () => {
    App.Main.OnKeyPress(Button.B);    
});

input.onButtonPressed(Button.AB, () => {
    App.Main.OnKeyPress(Button.AB);    
});

class Debug {
    public static Log(_: any) {
        console.log(_);
    }
}
