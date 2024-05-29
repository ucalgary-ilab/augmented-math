5.1. Curve Sketching
135
$$
f(x)=\left\{\begin{array}{cl}
x^{2} \sin \frac{1}{x} & \text { if } x \neq 0 \\
0 & \text { if } x=0
\end{array}\right.
$$
Figure 5.7
Example Let $f: \mathbb{R} \longrightarrow \mathbb{R}$ be the function given by
$$
f(x)=27 x-x^{3}
$$
Find and determine the nature of the critical number(s) of $f$.
Explanation The question is to find all the critical numbers of $f$ and for each critical number, determine whether it is a local maximizer, a local minimizer or not a local extremizer.
Solution Differentiating $f(x)$, we get
$$
\begin{aligned}
f^{\prime}(x) & =\frac{\mathrm{d}}{\mathrm{d} x}\left(27 x-x^{3}\right) \\
& =27-3 x^{2} \\
& =3(3+x)(3-x)
\end{aligned}
$$
Solving $f^{\prime}(x)=0$, we get the critical numbers of $f: x_{1}=-3$ and $x_{2}=3$.
- When $x$ is sufficiently close to and less than $-3, f^{\prime}(x)$ is negative; when $x$ is sufficiently close to and greater than $-3, f^{\prime}(x)$ is positive. Hence, by the First Derivative Test, $x_{1}=-3$ is a local minimizer of $f$.
- When $x$ is sufficiently close to and less than $3, f^{\prime}(x)$ is positive; when $x$ is sufficiently close to and greater than $3, f^{\prime}(x)$ is negative. Hence, by the First Derivative Test, $x_{2}=3$ is a local maximizer of $f$.
Remark The function in the above example is considered in the last subsection in which a table is obtained. It is clear from the table that $f$ has a local minimum at -3 and a local maximum at 3 . In the next example, we will use the table method to determine nature of critical numbers.
\begin{tabular}{|c|c|c|c|}
\hline & $(-\infty,-3)$ & $(-3,3)$ & $(3, \infty)$ \\
\hline \hline 3 & + & + & + \\
\hline $3+x$ & - & + & + \\
\hline $3-x$ & + & + & - \\
\hline \hline$f^{\prime}$ & - & + & - \\
\hline$f$ & $\searrow$ & $\nearrow$ & $\searrow$ \\
\hline
\end{tabular}
Example Let $f: \mathbb{R} \longrightarrow \mathbb{R}$ be the function given by
$$
f(x)=x^{4}-4 x^{3}+5
$$
Find and determine the nature of the critical number(s) of the $f$.
Explanation The function is considered in an example in the last subsection. Below we just copy the main steps from the solution there.
Solution
$$
\begin{aligned}
f^{\prime}(x) & =4 x^{3}-12 x^{2} \\
& =4 x^{2}(x-3)
\end{aligned}
$$
\begin{tabular}{|c|c|c|c|}
\hline & $(-\infty, 0)$ & $(0,3)$ & $(3, \infty)$ \\
\hline$f^{\prime}$ & - & - & + \\
\hline$f$ & $\searrow$ & $\searrow$ & $\nearrow$ \\
\hline
\end{tabular}