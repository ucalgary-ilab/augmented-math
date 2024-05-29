64
Chapter 2. Functions and Graphs
Can you generalize the results for graphs of polynomial functions of degree $3,4, \ldots$ ?
3. Let $f(x)=\frac{2 x-1}{x^{2}+3}$. The graph of $f$ is shown on page 55. Note that there is a highest point and a lowest point. Find the coordinates of these two points. Hint: consider the range of $f$
The points are called relative extremum points. An easy way to find their coordinates is to use differentiation, see Chapter 5 .
4. An object is thrown upward and its height $h(t)$ in meters after $t$ seconds is given by $h(t)=1+4 t-5 t^{2}$.
(a) When will the object hit the ground?
(b) Find the maximum height attained by the object.
5. The manager of an 80-unit apartment complex is trying to decide what rent to charge. Experience has shown that at a rent of $\$ 20000$, all the units will be full. On the average, one additional unit will remain vacant for each $\$ 500$ increase in rent.
(a) Let $n$ represent the number of $\$ 500$ increases.
Find an expression for the total revenue $R$ from all the rented apartments.
What is the domain of $R$ ?
(b) What value of $n$ leads to maximum revenue?
What is the maximum revenue?
2.5 Compositions of Functions
Consider the function $f$ given by
$$
f(x)=\sin ^{2} x
$$
Recall that $\sin ^{2} x=(\sin x)^{2}$. For each input $x$, to find the output $y=f(x)$,
(1) first calculate $\sin x$, call the resulted value $u$;
(2) and then calculate $u^{2}$.
These two steps correspond to two functions:
(1) $u=\sin x$;
(2) $y=u^{2}$.
Given two functions, we can "combine" them by letting one function acting on the output of the other.
Definition Let $f$ and $g$ be functions such that the codomain of $f$ is a subset of the domain of $g$. The composition of $g$ with $f$, denoted by $g \circ f$, is the function given by
$$
(g \circ f)(x)=g(f(x))
$$
The right-side of (2.5.1) is read " $g$ of $f$ of $x$ ".
Figure 2.32 indicates that $f$ is a function from $A$ to $B$ and $g$ is a function from $C$ to $D$ where $B \subseteq C$.