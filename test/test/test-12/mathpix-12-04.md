SECTION 3.4 DERIVATIVES OF TRIGONOMETRIC FUNCTIONS
$\|||$
149
TEC Visual 3.4 shows an animation of Figure I.
We have used the addition formula for sine. See Appendix D.
FIGURE I
Let's try to confirm our guess that if $f(x)=\sin x$, then $f^{\prime}(x)=\cos x$. From the definition of a derivative, we have
$$
\begin{aligned}
f^{\prime}(x) & =\lim _{h \rightarrow 0} \frac{f(x+h)-f(x)}{h}=\lim _{h \rightarrow 0} \frac{\sin (x+h)-\sin x}{h} \\
& =\lim _{h \rightarrow 0} \frac{\sin x \cos h+\cos x \sin h-\sin x}{h} \\
& \left.=\lim _{h \rightarrow 0}\left[\frac{\sin x \cos h-\sin x}{h}+\frac{\cos x \sin h}{h}\right]+\cos x\left(\frac{\sin h}{h}\right)\right] \\
& =\lim _{h \rightarrow 0}\left[\sin x\left(\frac{\cos h-1}{h}\right)\right] \\
& =\lim _{h \rightarrow 0} \sin x \cdot \lim _{h \rightarrow 0} \frac{\cos h-1}{h}+\lim _{h \rightarrow 0} \cos x \cdot \lim _{h \rightarrow 0} \frac{\sin h}{h}
\end{aligned}
$$
Two of these four limits are easy to evaluate. Since we regard $x$ as a constant when computing a limit as $h \rightarrow 0$, we have
$$
\lim _{h \rightarrow 0} \sin x=\sin x \quad \text { and } \quad \lim _{h \rightarrow 0} \cos x=\cos x
$$
The limit of $(\sin h) / h$ is not so obvious. In Example 3 in Section 2.2 we made the guess, on the basis of numerical and graphical evidence, that
$$
\lim _{\theta \rightarrow 0} \frac{\sin \theta}{\theta}=1
$$
We now use a geometric argument to prove Equation 2. Assume first that $\theta$ lies between 0 and $\pi / 2$. Figure 2(a) shows a sector of a circle with center $O$, central angle $\theta$, and