SECTION 3.4 DERIVATIVES OF TRIGONOMETRIC FUNCTIONS
153
FIGURE 6
SOLUTION The velocity and acceleration are
$$
\begin{array}{l}
v=\frac{d s}{d t}=\frac{d}{d t}(4 \cos t)=4 \frac{d}{d t}(\cos t)=-4 \sin t \\
a=\frac{d v}{d t}=\frac{d}{d t}(-4 \sin t)=-4 \frac{d}{d t}(\sin t)=-4 \cos t
\end{array}
$$
The object oscillates from the lowest point $(s=4 \mathrm{~cm})$ to the highest point $(s=-4 \mathrm{~cm})$. The period of the oscillation is $2 \pi$, the period of $\cos t$.
The speed is $|v|=4|\sin t|$, which is greatest when $|\sin t|=1$, that is, when $\cos t=0$. So the object moves fastest as it passes through its equilibrium position $(s=0)$. Its speed is 0 when $\sin t=0$, that is, at the high and low points.
The acceleration $a=-4 \cos t=0$ when $s=0$. It has greatest magnitude at the high and low points. See the graphs in Figure 6.
EXAMPLE 4 Find the 27th derivative of $\cos x$.
SOLUTION The first few derivatives of $f(x)=\cos x$ are as follows:
$$
\begin{aligned}
f^{\prime}(x) & =-\sin x \\
f^{\prime \prime}(x) & =-\cos x \\
f^{\prime \prime \prime}(x) & =\sin x \\
f^{(4)}(x) & =\cos x \\
f^{(5)}(x) & =-\sin x
\end{aligned}
$$
We see that the successive derivatives occur in a cycle of length 4 and, in particular, $f^{(n)}(x)=\cos x$ whenever $n$ is a multiple of 4 . Therefore
$$
f^{(24)}(x)=\cos x
$$
and, differentiating three more times, we have
$$
f^{(27)}(x)=\sin x
$$
Our main use for the limit in Equation 2 has been to prove the differentiation formula for the sine function. But this limit is also useful in finding certain other trigonometric limits, as the following two examples show.
EXAMPLE 5 Find $\lim _{x \rightarrow 0} \frac{\sin 7 x}{4 x}$.
SOLUTION In order to apply Equation 2, we first rewrite the function by multiplying and dividing by 7 :
$$
\frac{\sin 7 x}{4 x}=\frac{7}{4}\left(\frac{\sin 7 x}{7 x}\right)
$$
If we let $\theta=7 x$, then $\theta \rightarrow 0$ as $x \rightarrow 0$, so by Equation 2 we have
$$
\lim _{x \rightarrow 0} \frac{\sin 7 x}{4 x}=\frac{7}{4} \lim _{x \rightarrow 0}\left(\frac{\sin 7 x}{7 x}\right)=\frac{7}{4} \lim _{\theta \rightarrow 0} \frac{\sin \theta}{\theta}=\frac{7}{4} \cdot 1=\frac{7}{4}
$$