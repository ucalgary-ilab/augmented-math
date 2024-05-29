390
\|\|
CHAPTER 7 INVERSE FUNCTIONS
(a) $y=x^{2}, \quad x \in \mathbb{R}$
(b) $f(x)=x^{2}, \quad 0 \leqslant x \leqslant 2$
FIGURE I 2
FIGURE I 3
NOTE I Replacing $a$ by the general number $x$ in the formula of Theorem 7, we get
$$
\left(f^{-1}\right)^{\prime}(x)=\frac{1}{f^{\prime}\left(f^{-1}(x)\right)}
$$
If we write $y=f^{-1}(x)$, then $f(y)=x$, so Equation 8 , when expressed in Leibniz notation, becomes
$$
\frac{d y}{d x}=\frac{1}{\frac{d x}{d y}}
$$
NOTE 2 If it is known in advance that $f^{-1}$ is differentiable, then its derivative can be computed more easily than in the proof of Theorem 7 by using implicit differentiation. If $y=f^{-1}(x)$, then $f(y)=x$. Differentiating the equation $f(y)=x$ implicitly with respect to $x$, remembering that $y$ is a function of $x$, and using the Chain Rule, we get
$$
\begin{aligned}
f^{\prime}(y) \frac{d y}{d x} & =1 \\
\frac{d y}{d x} & =\frac{1}{f^{\prime}(y)}=\frac{1}{\frac{d x}{d y}}
\end{aligned}
$$
EXAMPLE 6 Although the function $y=x^{2}, x \in \mathbb{R}$, is not one-to-one and therefore does not have an inverse function, we can turn it into a one-to-one function by restricting its domain. For instance, the function $f(x)=x^{2}, 0 \leqslant x \leqslant 2$, is one-to-one (by the Horizontal Line Test) and has domain $[0,2]$ and range $[0,4]$. (See Figure 12.) Thus $f$ has an inverse function $f^{-1}$ with domain $[0,4]$ and range $[0,2]$.
Without computing a formula for $\left(f^{-1}\right)^{\prime}$ we can still calculate $\left(f^{-1}\right)^{\prime}(1)$. Since $f(1)=1$, we have $f^{-1}(1)=1$. Also $f^{\prime}(x)=2 x$. So by Theorem 7 we have
$$
\left(f^{-1}\right)^{\prime}(1)=\frac{1}{f^{\prime}\left(f^{-1}(1)\right)}=\frac{1}{f^{\prime}(1)}=\frac{1}{2}
$$
In this case it is easy to find $f^{-1}$ explicitly. In fact, $f^{-1}(x)=\sqrt{x}, 0 \leqslant x \leqslant 4$. [In general, we could use the method given by (5).] Then $\left(f^{-1}\right)^{\prime}(x)=1 /(2 \sqrt{x})$, so $\left(f^{-1}\right)^{\prime}(1)=\frac{1}{2}$, which agrees with the preceding computation. The functions $f$ and $f^{-1}$ are graphed in Figure 13 .
EXAMPLE 7 If $f(x)=2 x+\cos x$, find $\left(f^{-1}\right)^{\prime}(1)$.
SOLUTION Notice that $f$ is one-to-one because
$$
f^{\prime}(x)=2-\sin x>0
$$
and so $f$ is increasing. To use Theorem 7 we need to know $f^{-1}(1)$ and we can find it by inspection:
$$
f(0)=1 \Rightarrow f^{-1}(1)=0
$$
Therefore $\quad\left(f^{-1}\right)^{\prime}(1)=\frac{1}{f^{\prime}\left(f^{-1}(1)\right)}=\frac{1}{f^{\prime}(0)}=\frac{1}{2-\sin 0}=\frac{1}{2}$