** END HEADER -- Diese zeile nicht löschen
//
// Erstellt am: 17.05.2019
//
parameter bmodal
local f, a
f = new Form1()
a = new Form2()
if (bmodal)
    f.mdi = .f.     && ensure
    f.ReadModal()
else
    f.mdi = .t.
    f.Open()
endif

class Form1 of Form

endclass

class Form2 of Form

endclass

