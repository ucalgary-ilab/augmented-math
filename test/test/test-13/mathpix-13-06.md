96
Chapter 3. Limits
$(a=0)$ Note that $f(x)=x^{2}$ on the left-side and the right-side of 0 . Thus we have
$$
\begin{array}{rlr}
\lim _{x \rightarrow 0} f(x) & =\lim _{x \rightarrow 0} x^{2} & \\
& =0^{2} \quad \text { Theorem 3.5.1 } \\
& =0 \\
& \neq f(0)
\end{array}
$$
Therefore, $f$ is not continuous at 0 .
$(a \neq 0)$ Note that $f(x)=x^{2}$ on the left-side and the right-side of $a$. Thus we have
$$
\begin{array}{rlr}
\lim _{x \rightarrow a} f(x) & =\lim _{x \rightarrow a} x^{2} & \\
& =a^{2} \quad \text { Theorem 3.5.1 } \\
& =f(a) &
\end{array}
$$
Therefore, $f$ is continuous at $a$.
Remark The graph of $f$ is shown in Figure 3.22.
Figure 3.22
In the preceding definition, we consider continuity of a function $f$ at a point $a$ (a real number is considered as a point on the real line). In the next definition, we consider continuity of $f$ on an open interval. Recall that an open interval is a subset of $\mathbb{R}$ that can be written in one of the following forms:
$$
\begin{aligned}
(\alpha, \beta) & =\{x \in \mathbb{R}: \alpha<x<\beta\} \\
(\alpha, \infty) & =\{x \in \mathbb{R}: \alpha<x\} \\
(-\infty, \beta) & =\{x \in \mathbb{R}: x<\beta\} \\
(-\infty, \infty) & =\mathbb{R}
\end{aligned}
$$
where $\alpha$ and $\beta$ are real numbers, and for the first type, we need $\alpha<\beta$.
Definition Let $I$ be an open interval and let $f$ be a function defined on $I$. If $f$ is continuous at every $a \in I$, then we say that $f$ is continuous on I.
Remark
- In the definition, the condition " $f$ is a function defined on $I$ " means that $f$ is a function such that $f(x)$ is defined for all $x \in I$, that is, $I \subseteq \operatorname{dom}(f)$.
- Since $I$ is an open interval, we may consider continuity of $f$ at any point $a$ belonging to $I$.
- If there exists $a \in I$ such that $f$ is not continuous at $a$, then $f$ is not continuous on $I$.