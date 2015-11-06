callback({
  "levelNumber": 26,
  "size": 15,
  "steps": 72,
  "successRatio": 1,
  "author": "ekx",
  "hash": "7db0db759728a6793568984764cff9a2",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 26-Small-Divide - SIZE 15/15 - SPEED 71/76 --\n\n-- For each pair of inbox items, floor divide (discard remainder) the first by\n-- the second by counting how many times the second can subtract the first until\n-- further subtraction returns a negative value.\n\n    JUMP     b\n    COMMENT  2\na:\n    COPYFROM 8\n    OUTBOX  \n    COMMENT  1\nb:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    COPYFROM 9\n    COPYTO   8\n    COMMENT  0\nc:\n    COPYFROM 0\n    SUB      1\n    JUMPN    a\n    COPYTO   0\n    BUMPUP   8\n    JUMP     c\n\n\nDEFINE COMMENT 0\neJxzY2Bg+CCypMBIhKPkgwjDqQ8iWybniCm2NUpxlFTKJuStVrqVyaR2K3O2xtFCca3c8rO6ktO79XL3\nxBlfqqo24SjRtBZMTrYVTL7uaJ/b6pHaUet9cM5PH/tNP31y92z3vbQfaDzDqdINlWtLNlSGFTbl782z\nz/2UlpA3O/lo4dP4/orCaMU2qQjJ6THha5bsDrff1Bfjszsw/dL+tOxL+2/la+0yLJbdmFwRM1Oxsr9i\nafmfrOdlz4uel73uWVp+cI5dVf/eP1WihypqNuwD2ZPb8ycrt0f0EIgd0F1lDaLr5ibkJc6JqE+cM/vY\ngTn2m+7OZZk/eaFZ3YqlSwoWrLiVabl6evrWNTsz3DZ9rt61bfKkLzt2ri3YlXqWYRSMghECAEmNgR0;\n\nDEFINE COMMENT 1\neJyLZ2BgOGX1KOKUVV3oe4vJvrdMFB0dje7ZndW9Zxeow+AwW4PHc7ZGTIiJdmnaf6PcchHze82GFm2d\n7y0KJ7636FpsaHFuaZiZ4Ap2A6OVdeprlnApz58tpFA4EWgsw3H33HI5b44S5VCOkhNxCXnq8TszTsSt\nif8aWeizO5zH80HoSbczgSfd5Lytg509H0X0utrnnnfJLT/vsqLL223L5OPu1jMWeR6cY+3DMv9GxME5\nJ+K2TAaZa1jcJSlSFKIgUqS2IKywdPXWQrUFIPEN6Vv8ehu2+IHYy/tYovh6bmUGdM9u7OqdPOlI/+O5\nVZPPLX03XXDF4tmZi3bMl5yet9i53XNpbjn7Mtkc9mXvEz2XPorwXGqUorI8YMKCFWuWxK3MXBS38vFc\nkHm7tn0P2LVN8K3kdsk7u7Zdm3J9+73mgl1N+Yv2q0VHHI4JyT1uHbz85Pyw+We64rZceF5kcGl2Y/8l\nyemhFzIXzT+zc+3yk7fWTTq6c+2TfYIrvPesWRK9zXoGwygYBYMAAADHUaxi;\n\nDEFINE COMMENT 2\neJzTZ2Bg0LTOLXezmd241EZy+lKbydeX2mjtUrQzWjnVSa//vAtDq7fb7MbcwA2VR0I2VEpFXKqKTGFo\nBWpj2JuXuehJM8v8pglqC2InzZ+9Z5L1jD2TAib8m9jW6dF3qepKJ0fJopYlBckVTfkiRf0VC3IZWo9m\nF05kzz63tDmnaUt1/qX974udz9yvDLh6vWby9TttvJfZ+p3PbJkacQRk/tY172W2ruHt+75a7SmIrzGL\no4R/sX3ujNW3Mp3338pkGAWjYBRQDAB3E1Vp;\n\nDEFINE LABEL 0\neJyzZ2Bg0BIPSXWXaOt0l8jdA6JZJTdUNko15VfKGqW4qFoHl2lN9mU3KPSJM97id8m8LtTN5mwCUBvD\nR/8VXbmBJ7tv5bd1yuSL1npmnU3YkD4/bEfKNf/C6C1+f8Osg88EdsWJ+cnm7PcSrWX0Otm934tlvrWP\n0cpSP/tNL4Ny94RERRzxia06Kp4accQxN3cPyNzjTTEhnE1dcZxNIauON6WeZWzl7att+1yd25MZ2zTh\ne8CeSZN9hacV+vjO+B7gOjsz1mYeR0nk/MmTxBcwnCpboNf/aeHzohVLWaKal1sH7115zX/rmmv+DVvO\nJpjt4CgR3KXYxrnXftPxva8vMoyCUTAKGADCWmtJ;\n\nDEFINE LABEL 1\neJwzY2BgKPU72f3EY2+Tnb1ZHY9VRL2lqXO7imHMzBX675d56t87kWbAe/m/Ucy9YvPuF36W515FO5x7\nNcsn5l5uYOE188hL+zdHNW3ZHBWy6kbEwTldQSu6Zvnca3b2vNcMNJrBPLJJyzzSPWZzVNfizVFKpy9E\nL3jwNsb67tuYrTdA8u+LGVr9StQWTCjeudaweOsNw2K1p++LIXKGxY8i/EoeRYDYP9tXdEV0BEzw6JPd\neHNy4bWL02LuGUw/+NB3Rt39rJlbb8jP3bDv6oLS1d1LAiYsWCFayzAKRsEoIAoAAGpxZlk;\n\nDEFINE LABEL 8\neJwLZ2BgmK3xuTpSc0PlbA3vMhfVJQV9ikcLD0t+rl4nytBqJfhjqjPf+2WtvEe37eOPOFIizHv5gZT1\n3UQ167ue+pOvLzDivQw0guFGxIbKGxHeZfPCnhfxBSbkOXsm5L1xPVq4ydm77I/97MalNoUTeazeL1tr\neWsdj5XP7qU2e49LOvJe3uRceM3Zs/CafVjbuQvR9064JGzYdyBRa1dkSulq8dTMRTtSfkxdnHCv+W1M\nf4VURFM+yK7ioqqG7wUruiwLJKfPKFiy9X3xyQuaZZOv21VJ3jGrtb6b0SR5p7ST9/LL3nsn/k08uq1q\nstHKm5PVFlRNnt1oMeXWui1TL+3XmFV333W29V2QeY4rRGsfLWeZ77jixy3L1TvXTlg3eRLL5tmNf7aK\n1q7aI1rrvL+q4c7BFV0fj65Zcub4kq3aJ1LPvjyhdwWkd+etUkWJ29dugthHTj0v0r3/vMjymXeZ5pvn\nRQyjYBQMAQAAvMep6g;\n\nDEFINE LABEL 9\neJxzZWBgyBGrC12tFBMyWftRhKPRmnhL0zXx303fJ8qrT55UqLBz7WFJ88ONUlVHIzV9dlc49u8FamEI\nCHBunxe2t8myYG/Trfw/WY65XXErsuaHLU6wDt4cNT/MPsw9Znnw+8Qzgbcyjf0/V5f6pXaU+tXN+uh/\nbilbyJ/1f8OatoinLtnqmBuyCmTe9Rr3GCBeGFyXu0ewnmW+d+OlqtbmW5mTuq75s/W/dt8z6bX7u+lb\n/CLnd8WB1GufeBSRezwm5ONR6+Bd2wp9sjdM9p2xOibk0fL3iTpLcssDFwVMCFx0cI7OEqOVe1cmbn6/\nTmvXoc0+uzP2au2qPZi42fhoyCq2U3Wz5p+Z3Tj/TFP+yxNdcVeOWAdbH7rmzzAKRsEIAgAoHIOV;\n\n"
});