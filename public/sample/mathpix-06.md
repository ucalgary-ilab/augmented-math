![](https://cdn.mathpix.com/cropped/2023_03_05_26381ea88ecaefe3ff70g-1.jpg?height=353&width=430&top_left_y=190&top_left_x=120)

FIGURE 7

![](https://cdn.mathpix.com/cropped/2023_03_05_26381ea88ecaefe3ff70g-1.jpg?height=367&width=430&top_left_y=639&top_left_x=120)

FIGURE 8

■ The expression

$$
\frac{f(a+h)-f(a)}{h}
$$

in Example 3 is called a difference quotient and occurs frequently in calculus. As we will see in Chapter 2 , it represents the average rate of change of $f(x)$ between $x=a$ and $x=a+h$. EXAMPLE 2 Sketch the graph and find the domain and range of each function.
(a) $f(x)=2 x-1$
(b) $g(x)=x^{2}$

SOLUTION

(a) The equation of the graph is $y=2 x-1$, and we recognize this as being the equation of a line with slope 2 and $y$-intercept -1 . (Recall the slope-intercept form of the equation of a line: $y=m x+b$. See Appendix B.) This enables us to sketch a portion of the graph of $f$ in Figure 7. The expression $2 x-1$ is defined for all real numbers, so the domain of $f$ is the set of all real numbers, which we denote by $\mathbb{R}$. The graph shows that the range is also $\mathbb{R}$.

(b) Since $g(2)=2^{2}=4$ and $g(-1)=(-1)^{2}=1$, we could plot the points $(2,4)$ and $(-1,1)$, together with a few other points on the graph, and join them to produce the graph (Figure 8). The equation of the graph is $y=x^{2}$, which represents a parabola (see Appendix C). The domain of $g$ is $\mathbb{R}$. The range of $g$ consists of all values of $g(x)$, that is, all numbers of the form $x^{2}$. But $x^{2} \geqslant 0$ for all numbers $x$ and any positive number $y$ is a square. So the range of $g$ is $\{y \mid y \geqslant 0\}=[0, \infty)$. This can also be seen from Figure 8 .

EXAMPLE 3 If $f(x)=2 x^{2}-5 x+1$ and $h \neq 0$, evaluate $\frac{f(a+h)-f(a)}{h}$.

SOLUTION We first evaluate $f(a+h)$ by replacing $x$ by $a+h$ in the expression for $f(x)$ :

$$
\begin{aligned}
f(a+h) & =2(a+h)^{2}-5(a+h)+1 \\
& =2\left(a^{2}+2 a h+h^{2}\right)-5(a+h)+1 \\
& =2 a^{2}+4 a h+2 h^{2}-5 a-5 h+1
\end{aligned}
$$

Then we substitute into the given expression and simplify:

$$
\begin{aligned}
\frac{f(a+h)-f(a)}{h} & =\frac{\left(2 a^{2}+4 a h+2 h^{2}-5 a-5 h+1\right)-\left(2 a^{2}-5 a+1\right)}{h} \\
& =\frac{2 a^{2}+4 a h+2 h^{2}-5 a-5 h+1-2 a^{2}+5 a-1}{h} \\
& =\frac{4 a h+2 h^{2}-5 h}{h}=4 a+2 h-5
\end{aligned}
$$

\section{REPRESENTATIONS OF FUNCTIONS}

There are four possible ways to represent a function:

- verbally (by a description in words)

- numerically (by a table of values)

- visually (by a graph)

- algebraically (by an explicit formula)

If a single function can be represented in all four ways, it's often useful to go from one representation to another to gain additional insight into the function. (In Example 2, for instance, we started with algebraic formulas and then obtained the graphs.) But certain