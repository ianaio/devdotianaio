#![no_implicit_prelude]

#[::gloo::worker::reactor::reactor]
async fn Worker(_scope: ::gloo::worker::reactor::ReactorScope<(), ()>) {}

fn main() {}
