<h6><font color=grey>created on 1 November 2023</font></h6>

<h3>Monty hall problems</h3>

Description: you are a contestant on a game show, hosted by Monty Hall. Monty shows you three doors - $A$, $B$, and $C$. Begind one and only one of which is a new car and the other two doors have goats. If you guess correctly, the car is yours; otherwise, you get a goat. You guess $A$ at random. Monty, who is forbidden from revealing where the car is, then opens Door $C$, which, of course, has a goat behind it. He tells you that you can now switch to Door $B$, or stick with Door $A$. Whichever you pick, you'll get what's behind it. Are you better off opening Door $A$, or switching to Door $B$?
<hr>

Answer:

Let $X$ indicate the door chosen by the player, $Y$ indicate the door hiding the car, and $Z$ indicate the door opened by the host. We can prove that 

$$
P(Y=A|X=A,Z=C) < P(Y=B|X=A,Z=C)
$$

So, we'll compute the components of this expression necessary to illustrate this inequality, and then combine them. We see that switching doors doubles our chances of winning.

$$
\begin{align}
P(Z=C|X=A)&=P(Z=C|𝑋 = 𝐴, 𝑌 = 𝐴)𝑃(𝑌 = 𝐴) \\
          &+ 𝑃(𝑍 = 𝐶|𝑋 = 𝐴, 𝑌 = 𝐵)𝑃(𝑌 = 𝐵) \\
          &+ 𝑃(𝑍 = 𝐶|𝑋 = 𝐴, 𝑌 = 𝐶)𝑃(𝑌 = 𝐶)\\
          &=1/2 * 1/3 + 1 * 1/3 + 0 * 1/3 \\
          &=1/2  \\
𝑃(𝑌 = 𝐴|𝑋 = 𝐴, 𝑍 = 𝐶)&={P(Y=A)P(X=A,Z=C|Y=A) \over P(X=A,Z=C)}   \\
                      &={P(Z=C|X=A,Y=A)P(X=A|Y=A)P(A) \over P(Z=C|X=A)P(X=A)}  \\
                      &={P(Z=C|X=A,Y=A)P(X=A,Y=A) \over P(Z=C|X=A)P(X=A)}\\
                      &={P(Z=C|X=A,Y=A)P(Y=A|X=A) \over P(Z=C|X=A)} \\
                      &={1/2*1/3 \over 1/2} \\
                      &=1/3  \\ 
𝑃(𝑌 = 𝐵|𝑋 = 𝐴, 𝑍 = 𝐶) &= 1 − 𝑃(𝑌 = 𝐴|𝑋 = 𝐴, 𝑍 = 𝐶) − 𝑃(𝑌 = 𝐶|𝑋 = 𝐴, 𝑍 = 𝐶) \\
                       &= 1 − 1/3 − 0 \\
                       &=2/3 \\
\end{align}
$$
