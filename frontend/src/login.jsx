function App() {
    return (
        <>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 form-container">
                        <h2>User Login</h2>
                        <form action="#" method="POST">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input type="text" class="form-control" id="username" name="username" required/>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" name="password" required/>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}